import * as C from './styles'
import { AiFillDislike, AiFillLike, AiFillBulb, AiOutlineStar } from "react-icons/ai";
import { Input } from '../input';
export const Elogio = ({from, to, text,reagir,  like, orgulho, ecellent, colaboracao, id})=>{
    return(
        <C.Container>
            <div className='elogioHeader'>
                <p>De <strong>{from}</strong> para: <strong>{to}</strong>:</p>
            </div>
            <div className='elogio'>
                <p>{text}</p>
            </div>
            <C.Reactions>
                <div className='comment'>
                    <Input
                        text="Comentar "
                        placeholder="Comentar"
                    />
                </div>
                <ul className='reactionsButtons'>
                    <li id={id} data-reaction="like" onClick={reagir}>{like}<AiFillLike  id={id} onClick={reagir} /></li>
                    <li  id={id} data-reaction="orgulho"  onClick={reagir}>{orgulho} <AiFillDislike id={id} onClick={reagir} /></li>
                    <li id={id} data-reaction="excellent"  onClick={reagir}>{ecellent} <AiFillBulb id={id} onClick={reagir} /></li>
                    <li id={id} data-reaction="colaboracao"  onClick={reagir}>{colaboracao} <AiOutlineStar id={id} onClick={reagir} /></li>
                </ul>
            </C.Reactions>
        </C.Container>
    )
}