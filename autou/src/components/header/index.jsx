import * as C from './styles'
export const Header = ({colaborador})=>{
    return(
        <C.Header>
                <div>{colaborador}</div>
                <div><button>Sair</button></div>
        </C.Header>
    )
}