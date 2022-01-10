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
    const [total, setTotal] = useState(0);
    const [contador, setContador] = useState(0);
    const [token, setToken] = useState(() => {

        const storedToken = localStorage.getItem("userToken");

        return storedToken;
    });

    const { progress, setProgress } = useAuth();

    useEffect(() => {

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
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

    }, [progress, contador]);

    useEffect(() => {

        if (info !== null) {

            let count = 0;

            for (let element of info) {
                if (element.done == true) count++;
            }
            setProgress(Math.ceil((count * 100) / total));
        }

    }, [info, contador]);

    function checkHabit(id) {

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {},
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        promise.then(response => {
            console.log(response.data);
        });
        promise.catch(error => alert(error));
    }

    function uncheckHabit(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {},
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        promise.then(response => {
        });
        promise.catch(error => alert(error));
    }

    return (
        <>
            <Header />
            <Container>
                <WeekdayDate />
                {info.map((items) => {
                    return (
                        <HabitSection key={items.id} onClick={() => {
                            setContador(contador + 1);
                        }}>
                            <p>{items.name}</p>
                            <CheckBox id={items.id} checkHabit={checkHabit} uncheckHabit={uncheckHabit} info={items.done} contador={contador} setContador={setContador}>
                                <img src="assets/img/check.png" />
                            </CheckBox>
                        </HabitSection>
                    )
                })}
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