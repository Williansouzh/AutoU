import { useEffect, useState } from 'react'
import { api } from '../../api';
import * as C from './styles'

export const TopColaboradores = ({showTop})=>{
    const [top, setTop] =  useState([]);
    useEffect(()=>{
        updateRanking()
    }, []);
    const countItems = (arr)=>{
        for(let i of arr){
            
        }
    }
    const updateRanking = async ()=>{
        let elogios = await api.getAllElogios();
        let ranking = []
        elogios.filter((e)=>{
            if(ranking.indexOf(e.for) == -1 ){
                ranking.push(e.for)
            }else{
            }
            setTop(ranking)
            console.log(ranking)
        })
        setTop(ranking)
        console.log(ranking)
    }
    return(
        <C.Container>
            <div className='topHeader'>
                <h1>Melhores colaboradores</h1>
                <span onClick={showTop} >X</span>
            </div>
            <ul>
            {
                top.map((e)=>(
                    <li>{e}</li>
                ))
            }
            </ul>
        </C.Container>
    )
}