import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    padding: .5em 1em;
    margin-bottom: 1em;
    .elogioHeader{
        padding: .5em 1em;
        background-color: #002333;
        display: flex;
        flex-direction: row;
        color: white;
    }
`;

export const Reactions = styled.div`
    background-color: #159A9C;
    font-size: 1.5em;
    ul{
        padding: 0;
        display: flex;
        justify-content: space-around;
    }
    .reactionsButtons{
        list-style: none;
    }
    .reactionsButtons li{
        cursor: pointer;
        transition-duration: 1s;
    };
    .reactionsButtons li:hover{
        color: #002333;
        transform: scale(2);
    };
    .elogio p{
        color: #002333;
    }
    .comment input{
        color: #002333;
        outline: none;
    }
`;