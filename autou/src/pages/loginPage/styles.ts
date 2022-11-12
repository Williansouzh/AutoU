import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    background-color: whitesmoke;
    margin: 20vh auto;
    hr{
        width: 90%;
    }
    .checkbox{
        padding-left: 5px;
        text-align: left;
    }
    .loginButton{
        cursor: pointer;
        border: none;
        padding: 1em 4em;
        border-radius :.2em;
        margin: 0 auto;
        max-width: 50%;
        background-color: green;
        border: 1px solid whitesmoke;
    }
    .loginButton:hover{
        background-color: whitesmoke;
        border: 1px solid green;
    }
    .createAccount a{
        color: green;
    }
`;
export const Form = styled.form`
    padding: 1em;
    box-shadow: -5px 5px 8px #888888 ;
    display: flex;
    flex-direction: column;
    justify-content: left;
`;