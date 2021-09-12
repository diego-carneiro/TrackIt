import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

export default function Footer() {

    let history = useHistory();

    return (
        <BottomBar>
            <Button onClick={() => history.push("/habitos")}>Hábitos</Button>
            <Icon></Icon>
            <Button onClick={() => history.push("/habitos")}>Histórico</Button>   
        </BottomBar>
    );
}
// ::::::::::Styled-Components::::::::::
const BottomBar = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    position: fixed;
    bottom: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`;
const Button = styled.button`
    font-size: 18px;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    border: none;
    background: none;
`;
const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: crimson;
`;

