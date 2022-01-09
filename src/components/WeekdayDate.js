import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function WeekdayDate() {

    const dayjs = require("dayjs")

    return (
        <>
            <WeekdaySection>
                <h1>{dayjs().format('dddd')}, {dayjs().format('DD/MM')}</h1>
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
        color: #BABABA;
    }
`
