import { json } from "stream/consumers";

export const api = {
    
    getAllUser: async () =>{
        let response = await fetch('http://localhost:5000/colaboradores/');
        return await response.json()
    },
    getAllElogios:  async ()=>{
        let response = await fetch('http://localhost:5000/elogios/');
        return await response.json();
    },
    getElogio: async (id:any)=>{
        if(id){
            let response = await fetch(`http://localhost:5000/elogios/${id}`);
            return await response.json();
        }
    },
    addComentario: async (elogio:any)=>{
        fetch('http://localhost:5000/elogios/', {
            method: 'POST',
            body: JSON.stringify(elogio),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })
    },
    addElogio: async (id:any,elogio: any)=>{
        fetch(`http://localhost:5000/elogios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(elogio)
        }).then(resp=>resp.json()).then(data=>{
            console.log(data)
            return data
        }).catch(err=>console.log(err));
    },
    getCurrentUser: async (name: string)=>{
        let currentUser = await fetch(`http://localhost:5000/currentUser/`);
        return await currentUser.json()
    },
    setCurrentUser: async (nome: string)=>{
        fetch(`http://localhost:5000/currentUser/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nome)
        }).then(resp=>resp.json()).then(data=>{
            console.log(data)
            return data
        }).catch(err=>console.log(err));
    },
    reagir: async (reaction:any, id: number)=>{
        fetch(`http://localhost:5000/elogios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reaction)
        }).then(resp=>resp.json().then(data=>{
            return data
        })).catch(err=>console.log(err));
    }
}