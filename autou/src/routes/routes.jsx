import {useRoutes} from 'react-router-dom';
import { ElogiosPage } from '../pages/elogiosPage';
import { LogingPage } from '../pages/loginPage';

export const MainRoutes = ()=>{
    return(
        useRoutes([
            {path: '/', element: <LogingPage/>},
            {path: '/elogios', element: <ElogiosPage/>}
        ])
    )
}