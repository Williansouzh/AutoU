import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: white;
    span{
        font-size:2em;
    }
    .topHeader{
         padding: 1em;
         display: flex;
         justify-content: space-between;
    }
    ul{
        list-style: none;
        text-align: center;
        margin: 0 auto;
        font-size: 2em;
        width: 80%;
    }
    li{
        margin: .8em 0em;
        border: 2px solid black;
        padding: .3em;
    }
`