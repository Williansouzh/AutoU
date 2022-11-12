import { Input } from '../../components/input'
import {useState, useEffect} from 'react'
import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import {api} from '../../api'
export const LogingPage = ()=>{
    //routes methods
    const navigate = useNavigate(); 
    //states 
    const [userToCheck, setUser] = useState([])
    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');
    //fecth functios 
    const verificarUsuario = async (name, password)=>{
        let json = await api.getAllUser()
        let user =   json.filter( (e)=>{
            return e.nome === name && e.senha == password
        });
        setUser(user);
        if(userToCheck.length>0){
            api.setCurrentUser({
                "id_User": 1,
                "id": 1,
                "matricula": userToCheck[0].matricula,
                "email": userToCheck[0].email,
                "nome": userToCheck[0].nome,
                "sobrenome": userToCheck[0].sobrenome,
                "departamento": userToCheck[0].departamento,
                "cargo": userToCheck[0].cargo,
                "senha": userToCheck[0].senha,
            })
            navigate("/elogios")
        }
        console.log(userToCheck.length)
    }
    //functions 
    const submitHandle = (e)=>{
        e.preventDefault();
        if(name !== "" && senha !=="" ){
            verificarUsuario(name, senha);
        } else{
            alert("Dados incorretos")
        }
    }
    return(
        <C.Container>
            <C.Form onSubmit={submitHandle}> 
                <h1>Login</h1>
                <hr />
                <h4>{name}</h4>
                <h4>{senha}</h4>
                <Input 
                    name="Nome" 
                    placeholder="Digite o seu nome" 
                    type="text"
                    value={name}
                    onChangeHandle={(e)=>setName(e.target.value)}
                    />
                <Input 
                    name="Senha" 
                    placeholder="Digite a sua senha" 
                    value={senha}
                    onChangeHandle={(e)=>setSenha(e.target.value)}
                    type="password"/>
                <div className='checkbox'>
                    <input type="checkbox"/>
                    <label> Manter-me conectado</label>
                </div>
                <button className='loginButton' onClick={submitHandle}>Login</button>
                <div className='createAccount'>
                    <p>Ainda não tem conta? <a href="#">Cadastre-se</a></p>
                </div>
            </C.Form>
        </C.Container>
    )
}