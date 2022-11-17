import styled from "styled-components";

export const Header = styled.header`
    background-color: #002333;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    color: white;
    .buttons{
        display: flex;
        align-items: center;
    }
    button{
        transition-duration: .5s;
        cursor: pointer;
        margin-left: .5em;
        background-color: #159A9C;
        padding: .5em 1em;
        border: 1px solid #159A9C;
    };
    button:hover{
        background-color: white;
        border-color: #159A9C;
    }
`