import styled from 'styled-components';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';

export default function Login_Page( {setToken} ) {

    const initialValue = {
        email: '',
        password: '',
    }

    const [infos, setInfos] = useState(initialValue);

    const history = useHistory();

    function onChange(ev) {
        const { name, value } = ev.target;

        setInfos({ ...infos, [name]: value });
    }
    console.log(infos)

    function loginRequest(ev){
        ev.preventDefault();

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, infos);
        promise.then((response) => {

            setToken(response.data.token)
            history.push('/hoje')
        });
        promise.catch((error) => alert(error))
    }
    return (

        <Container>
            <Logo src="/img/trackit.svg" />
            <Input placeholder="  email" type="text" name="email" onChange={onChange}>
            </Input>
            <Input placeholder="  senha" type="text" name="password" onChange={onChange}>
            </Input>
            <Button type="button" onClick={loginRequest}>Entrar
            </Button>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    );
}

// ::::::::::Styled-Components::::::::::

const Container = styled.div`
    width: 100vw;
    height: 420px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    *{
        font-family: 'Lexend Deca', sans-serif;
    }
    p{
        color:#52B6FF;
        text-decoration-line: underline;
        line-height: 17px;
        font-size: 14px;
        text-align: center;
        margin-top: 25px;
    }
    & ::placeholder{
        color: #DBDBDB;
    }
`;
const Logo = styled.img`
    width: 180px;
    height: 178px;
    margin-top: 68px;
`;
const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px;
    margin-bottom: 6px;
`;
const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border: none;
    border-radius: 4.63636px;
    font-size: 21px;
    color: #FFFFFF;
`;

