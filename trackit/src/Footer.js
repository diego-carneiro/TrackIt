import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <BottomBar>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Icon></Icon>
                <p>Histórico</p>   
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
    *{
        font-family: 'Lexend Deca', sans-serif;
    }
    p{
        color:#52B6FF;
        
    }
`;
const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: crimson;
`;

