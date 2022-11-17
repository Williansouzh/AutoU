import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
`
export const ElogiosContainer = styled.div`
    height: 100vh;
    overflow-y: scroll ;
`

export const CriarElogio = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 0.5em 1em;
    flex-direction: column;
    background-color: #B4BEC9;
    h2{
        color: #002333;
    }
    nav{
        display: flex;
        justify-content: space-around;
    }
    textarea{
        padding: 0.5em;
        font-size: 1.2em;
        width: 100%;
        height: 20vh;
        border: none;
        outline: none;
        color: #002333;
    }
    button{
        margin-left: .5em;
        display: flex;
        align-self: flex-start;
        background-color: #159A9C;
        border: none;
        cursor: pointer;
        padding: 1em 2em;
        border-radius: 1em;
        transition-duration: .5s;
    }
    .adiconarElogio{
        padding: 1em;
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    select{
        color: white;
        background-color: #002333;
        outline: none;
        width: 30%;
    }
    button:hover{
        background-color: #002333;
    }
`