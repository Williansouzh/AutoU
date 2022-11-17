import { useState, useEffect } from 'react'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'
import { Elogio } from '../../components/elogio'
import { Header } from '../../components/header'
import * as C from './styles'
import { TopColaboradores } from '../../components/topColaboradores'
import { Loading } from '../../components/loading'
export const ElogiosPage = ()=>{
    const [showNotifications, setShowNotifications] = useState(false);
    const [showTopColaboradores, setShowTopColaboradores] = useState(false)
    const [currentColaborador, setCurrentColaborador] = useState([])
    const [elogioFor, setElogioFor] = useState("Anna");
    const [seusElogios, setSeusElogios] = useState([]);
    const [elogios, setElogios] = useState([]);
    const [colaboradores, setColaboradores] = useState([]);
    const [elogioMessage, setElogioMessage] = useState("");
    const [loading, setLoading]  = useState(false);
    const navigate = useNavigate()
    //functions
    useEffect(()=>{
        updatePageElogios()
        updateColaboradores()
    }, []);
    const updateColaboradores = async ()=>{
        let user  = await api.getCurrentUser();
        setCurrentColaborador(user.nome)
        let users = await api.getAllUser();
        setColaboradores(users)
    }
    const updatePageElogios = async (loading)=>{
        setLoading(loading);
        let json = await api.getAllElogios();
        json = json.reverse(); 
        let meusElogios = json.filter((e)=>{
            return e.for == currentColaborador;
        });
        setSeusElogios(meusElogios)
        setElogios(json);
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
        console.log(seusElogios);
    };
    const reagir = async (reaction, id)  =>{
        id = reaction.target.id;
        reaction = reaction.target.dataset.reaction;
        let elogio = await api.getElogio(id);
        const newObject = {...elogio}
            if(reaction == "like" ){
                api.reagir({
                    ...newObject,
                    like: elogio.like+1
                }, id)
            }else if(reaction == "orgulho"){
                api.reagir({
                    ...newObject,
                    orgulho: elogio.orgulho+1
                }, id)
            }else if(reaction == "excellent"){
                api.reagir({
                    ...newObject,
                    excellent: elogio.excellent+1
                }, id)
            }else if(reaction == "colaboracao"){
                api.reagir({
                    ...newObject,
                    colaboracao: elogio.colaboracao+1
                }, id)
            }
        
        updatePageElogios(false)
    }
    const criarElogio = async (text, to)=>{
        console.log(elogios.length);
        let id = api.getAllElogios()
        api.addComentario({
            "id": id.length+1,
            "from": currentColaborador,
            "for": elogioFor,
            "elogio": elogioMessage,
            "like": 0,
            "orgulho": 0,
            "excellent": 0,
            "colaboracao": 0
        });
        setElogioMessage("")
        updatePageElogios();
    }
    const seeNotifications = ()=>{
        updatePageElogios(true)
        showNotifications ?  setShowNotifications(false):  setShowNotifications(true);
    }
    const seeTopColaboradores = ()=>{
        setShowNotifications(false)
        showTopColaboradores ?  setShowTopColaboradores(false): setShowTopColaboradores(true);
    }
    return(
        <C.Container>
            <Header colaborador={currentColaborador} seeNotifications={seeNotifications} topColaboradores={seeTopColaboradores}/>
            {!showNotifications && !loading && 
                <>
                <C.CriarElogio>
                <h2 >Adicionar elogio</h2>
                <textarea 
                placeholder="Digite o seu elogio" wrap="hard"
                value={elogioMessage}
                onChange={(e)=>setElogioMessage(e.target.value)}
                />
                <div className='adiconarElogio'>
                    <button onClick={criarElogio}>Adicionar elogio</button>
                    <select onChange={(e)=>{
                        setElogioFor(e.target.value)
                        console.log(elogioFor)
                    }}>
                            {colaboradores.map((e, index)=>(
                                <option key={index} >{e.nome}</option>
                            ))}
                    </select>
                </div>
            </C.CriarElogio>
            {showTopColaboradores && !loading &&
               <TopColaboradores showTop={seeTopColaboradores}/>
            }
            <C.ElogiosContainer>
                {elogios.map((e, index)=>(
                    <Elogio 
                        id={e.id}
                        key={index}
                        from={e.from}
                        to={e.for}
                        text={e.elogio}
                        like={e.like}
                        colaboracao={e.colaboracao}
                        ecellent={e.excellent}
                        orgulho={e.orgulho}
                        reagir={reagir}
                    />
                ))
                }
            </C.ElogiosContainer>
                </>
            };
            {showNotifications && !loading &&
            <C.ElogiosContainer>
                {seusElogios.map((e, index)=>(
                    <Elogio 
                        id={e.id}
                        key={index}
                        from={e.from}
                        to={e.for}
                        text={e.elogio}
                        like={e.like}
                        colaboracao={e.colaboracao}
                        ecellent={e.excellent}
                        orgulho={e.orgulho}
                        reagir={reagir}
                    />
                ))
            }
        </C.ElogiosContainer>
        };
            
            {loading && 
                <Loading/>
            }
        </C.Container>
    )
}