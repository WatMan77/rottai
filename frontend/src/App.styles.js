import styled from "styled-components";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 16px;
`

export const ListItem = styled.div`
    border: 4px solid;
    border-colour: #d1cdcd;
    background: #ffffff;
    padding: 30px;
    vertical-align: middle;
    margin-left: 20%;
    margin-right: 20%;
    border-radius: 16px;
`
export const LinkButton = styled.button`
    margin-top: 20px;
    border: 4px solid;
    border-colour: #d1cdcd;
    background: #3083e3;
    width: 80px;
    padding: 8px;
    border-radius: 8px;
`;

export const Link = styled.a`
    color: #000000;
`