import styled from "styled-components";

export const Container = styled.div`
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 2vh;
`;
export const LoadingEffect = styled.div`
    margin-bottom: 2em;
    background-color: transparent;
    width: 100px;
    height: 100px;
    border: 3px  solid transparent;
    border-top: 3px solid #002333;
    border-bottom: 3px solid #002333;
    border-radius: 50%;

    animation: is-rotating 1s infinite;

    @keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
`;

