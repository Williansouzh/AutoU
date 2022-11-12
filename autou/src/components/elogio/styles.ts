import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    padding: 40px;
    background-color: whitesmoke;
    .elogioHeader{
        padding: .5em 1em;
        background-color: gray;
        display: flex;
        flex-direction: row;
    }
`;

export const Reactions = styled.div`
    background-color: greenyellow;
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
        color: blue;
        transform: scale(2);
    };
    .comment p{
    }
`;