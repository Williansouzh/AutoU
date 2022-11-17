import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    background-color: #DEEFE7;
    margin: 20vh auto;
    color: #002333;
    hr{
        width: 90%;
    }
    .checkbox{
        padding-left: 5px;
        text-align: left;
    }
    .loginButton{
        transition-duration: .5s;
        color: white;
        cursor: pointer;
        border: none;
        padding: 1em 4em;
        border-radius :.2em;
        margin: 0 auto;
        max-width: 50%;
        background-color: #002333;
        border: 1px solid whitesmoke;
    }
    .loginButton:hover{
        background-color: #159A9C;
        border: 1px solid #002333;
    }
    .createAccount a{
        color: #002333;
    }
`;
export const Form = styled.form`
    padding: 1em;
    box-shadow: -5px 5px 8px #888888 ;
    display: flex;
    flex-direction: column;
    justify-content: left;
`;