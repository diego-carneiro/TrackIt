import styled from 'styled-components';
import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';

export default function Signup_Page() {

    const initialValue = {
        email: '',
        name: '',
        image: '',
        password: '',
    }
    const [infos, setInfos] = useState(initialValue);
    const history = useHistory();

    console.log(infos);

    function onChange(ev) {
        const { name, value } = ev.target;

        setInfos({ ...infos, [name]: value });
    }
    function onSubmit(ev) {
        ev.preventDefault();
        
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, infos);
        promise.then((response) => {
            history.push('/')
            console.log(response)
        });
        promise.catch((error) => alert(error))
    }
    
    return (

        <Container>
            <Logo src="/img/trackit.svg" />
            <Input placeholder="  email" type="text" name="email" id="email" onChange={onChange}>
            </Input>
            <Input placeholder="  senha" type="text" name="password" id="passwordInput" onChange={onChange}>
            </Input>
            <Input placeholder="  nome" type="text" name="name" id="nameInput" onChange={onChange}>
            </Input>
            <Input placeholder="  foto" type="text" name="image" id="imgInput" onChange={onChange}>
            </Input>
            <Button type="button" onClick={onSubmit}>Cadastrar
            </Button>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Container>
    );
}



// if(!data){
//     return (
//         <p>Carregando</p>
//     );
// }

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

