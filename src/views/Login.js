import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../components/Logo";


export default function LoginPage( {setInfo} ) {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const initialValue = {
        email: "",
        password: "",
    };

    const [values, setValues] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", values);
        promise.then(response => {

            navigate("/habitos");
            setIsLoading(true);
            setInfo(response.data);
        });
        promise.catch(error => alert(error))
    }


    if(isLoading === true){
        
        return (
            <Container>
            <Logo />
            <Form onSubmit={onSubmit}>
                <Input placeholder="  email" type="text" name="email" onChange={onChange}>
                </Input>
                <Input placeholder="  senha" type="password" name="password" onChange={onChange}>
                </Input>
                <Button type="submit">lol</Button>
            </Form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
        );
    }

    return (

        <Container>
            <Logo />
            <Form onSubmit={onSubmit}>
                <Input placeholder="  email" type="text" name="email" onChange={onChange}>
                </Input>
                <Input placeholder="  senha" type="password" name="password" onChange={onChange}>
                </Input>
                <Button type="submit">Entrar</Button>
            </Form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
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
        text-align: center;
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