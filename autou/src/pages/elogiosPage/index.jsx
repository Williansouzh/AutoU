import { wait } from '@testing-library/user-event/dist/utils'
import { useState, useEffect } from 'react'
import { api } from '../../api'
import { Elogio } from '../../components/elogio'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import * as C from './styles'
export const ElogiosPage = ()=>{
    const [currentColaborador, setCurrentColaborador] = useState([])
    const [elogioFor, setElogioFor] = useState("Anna")
    const [elogios, setElogios] = useState([]);
    const [colaboradores, setColaboradores] = useState([]);
    const [elogioMessage, setElogioMessage] = useState("")
    //functions
    useEffect(()=>{
        updateColaboradores()
        updatePageElogios()
    }, []);
    const updateColaboradores = async ()=>{
        let user  = await api.getCurrentUser();
        setCurrentColaborador(user.nome)
        let users = await api.getAllUser();
        setColaboradores(users)
    }
    const updatePageElogios = async ()=>{
        let json = await api.getAllElogios();
        json = json.reverse(); 
        setElogios(json);
    };
    const reagir = async (reaction, id)  =>{
        id = reaction.target.id;
        reaction = reaction.target.dataset.reaction;
        let elogio = await api.getElogio(id);
        const newObject = {...elogio}
        if(reaction == "like"){
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
        
        updatePageElogios()
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
        
        console.log(elogios)
        updatePageElogios();
    }
    return(
        <C.Container>
            <Header colaborador={currentColaborador}/>
            <C.CriarElogio>
                <h2>Criar elogio</h2>
                <textarea 
                placeholder="Digite o seu elogio" wrap="hard"
                value={elogioMessage}
                onChange={(e)=>setElogioMessage(e.target.value)}
                />
                <div className='adiconarElogio'>
                    <button onClick={criarElogio}>Adicionar elogio</button>
                    <select onChange={(e)=>{
                        setElogioFor(e.target.value);
                        console.log(elogioFor);
                    }}>
                            {colaboradores.map((e, index)=>(
                                <option key={index} >{e.nome}</option>
                            ))}
                    </select>
                </div>
            </C.CriarElogio>
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
            <Footer/>
        </C.Container>
    )
}