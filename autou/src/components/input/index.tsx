import * as C from './styles';

export const Input = ({name, type, placeholder, onChangeHandle }:any)=>{
    
    return(
        <C.Container>
            <label htmlFor={name} >{name}</label>
            <C.Input  type={type} placeholder={placeholder} id={name} onChange={onChangeHandle} />
        </C.Container>
    )
}