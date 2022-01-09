import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

import Header from "../components/Header";
import WeekdayDate from "../components/WeekdayDate";
import Footer from "../components/Footer";


export default function MenuButton({ token }) {

    const [info, setInfo] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        promise.then((response) => {
            setInfo(response.data);
        });

    }, []);


    return (
        <>
            <Header />
            <Container>
                <WeekdayDate />
                {info.map((items) => (
                    <HabitSection>
                        <p>{items.name}</p>
                        <CheckBox>

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
    display: flex;
    justify-content: space-between;
    p{
        font-size: 20px;
        color: #666666;
    }
`
const CheckBox = styled.div`
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
`

