import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Logo from "../components/Logo";

export default function Signup() {

    const navigate = useNavigate();

    const initialValue = {
        email: "",
        name: "",
        image: "",
        password: "",
    };

    const [values, setValues] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }
    
    function onSubmit(ev) {
        ev.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", values);
        promise.then(response => {
            
            navigate("/", { message: "Cadastro criado com sucesso!"});
        });
        promise.catch(error => alert(error));
    }


    console.log(values);

    return (

        <Container>
            <Logo />
            <Form onSubmit={onSubmit}>
                <Input placeholder="  email" type="email" name="email" id="email" onChange={onChange}>
                </Input>
                <Input placeholder="  senha" type="password" name="password" id="passwordInput" onChange={onChange}>
                </Input>
                <Input placeholder="  nome" type="text" name="name" id="nameInput" onChange={onChange}>
                </Input>
                <Input placeholder="  foto" type="text" name="image" id="imgInput" onChange={onChange}>
                </Input>
                <Button type="submit">Cadastrar</Button>
            </Form>
            
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Container>

    );
}
// ::::::::::Styled-Components::::::::::

const Container = styled.div`
    width: 100vw;
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
        margin-top: 25px;
    }
    & ::placeholder{
        color: #DBDBDB;
    }
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
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

