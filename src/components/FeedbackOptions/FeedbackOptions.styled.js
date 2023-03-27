import styled from "styled-components";

export const ButtonList = styled.div`
    display: flex;
    gap: 20px;
`;

export const Button = styled.button`
    width: 100px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    :hover {
        background-color: #2198c3;
    }
`;