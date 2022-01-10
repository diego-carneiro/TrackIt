import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import { useAuth } from "../providers/auth";

export default function WeekdayDate() {

    const { progress, setProgress } = useAuth();

    if (progress > 0){
        
        return (
            <>
                <WeekdaySection color={progress}>
                    <h1>{dayjs().locale("pt-br").format('dddd')}, {dayjs().format('DD/MM')}</h1>
                    <p>{progress}% dos hábitos concluídos</p>
                </WeekdaySection>
    
            </>
        );
    }

    return (
        <>
            <WeekdaySection color={progress}>
                <h1>{dayjs().locale("pt-br").format('dddd')}, {dayjs().format('DD/MM')}</h1>
                <p>Nenhum hábito concluído ainda</p>
            </WeekdaySection>

        </>
    );
}
// ::::::::::Styled-Components::::::::::
const WeekdaySection = styled.div`
    
    margin-bottom: 28px;
    h1{
        font-size: 23px;
        color: #126BA5;
    }
    p{
        font-size: 18px;
        color: ${props => props.color > 0 ? "#8FC549" : "#BABABA" };
    }
`
