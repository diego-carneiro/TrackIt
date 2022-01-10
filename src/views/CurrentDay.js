import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAuth } from "../providers/auth";

import axios from "axios";

import Header from "../components/Header";
import WeekdayDate from "../components/WeekdayDate";
import CheckBox from "../components/CheckBox"
import Footer from "../components/Footer";

export default function MenuButton() {

    const [info, setInfo] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [token, setToken] = useState(() => {

        const storedToken = localStorage.getItem("userToken");

        return storedToken;
    });

    const { progress, setProgress } = useAuth();

    useEffect(() => {

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        promise.then(response => {
            setInfo(response.data);
            setTotal(response.data.length);
        });

    }, []);

    console.log(count, "count");
    console.log(progress);
    
    useEffect(() => {
        
        const percent = Math.ceil((count * 100) / total) ;
        setProgress(percent);

    }, [count]);

    return (
        <>
            <Header />
            <Container>
                <WeekdayDate />
                {info.map((items) => (
                    <HabitSection key={items.id}>
                        <p>{items.name}</p>
                        <CheckBox count={count} setCount={setCount} >
                            <img src="assets/img/check.png" />
                        </CheckBox>
                    </HabitSection>
                ))}
            </Container>
            <Footer />
        </>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    padding: 28px 17px 28px 17px;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 70px;
`
const HabitSection = styled.div`
    width: 100%;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 13px 15px 13px 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    p{
        font-size: 20px;
        color: #666666;
    }
`