import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import {  AiOutlineStar } from "react-icons/ai";
export const Header = ({colaborador, seeNotifications, topColaboradores})=>{
    const navigate = useNavigate()
    return(
        <C.Header>
                <div>{colaborador}</div>
                <div className='buttons'>
                    <button onClick={topColaboradores}>Top colaboradores<AiOutlineStar/></button>
                    <button onClick={seeNotifications}>Meus elogios<AiOutlineStar/></button>
                    <button onClick={()=>navigate("/")}>Sair</button>
                </div>
        </C.Header>
    )
}