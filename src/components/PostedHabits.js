import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

import DayIcon from "./DayIcon";

export default function PostedHabits({ info, showHabits }) {

    const allDays = [
        {
            id: "7",
            day: "D",
        },
        {
            id: "1",
            day: "S",
        },
        {
            id: "2",
            day: "T",
        },
        {
            id: "3",
            day: "Q",
        },
        {
            id: "4",
            day: "Q",
        },
        {
            id: "5",
            day: "S",
        },
        {
            id: "6",
            day: "S",
        },
    ];
console.log(info);
    return (
        <>
            <HabitBox display={showHabits}>
                <HabitTitle>
                    <p></p>
                </HabitTitle>
                <DaySection>
                    {allDays.map((info) => (
                        <DayIcon>
                            <p>{info.day}</p>
                        </DayIcon>
                    ))}
                </DaySection>


            </HabitBox>
        </>
    );
}
// ::::::::::Styled-Components::::::::::
const HabitBox = styled.div`
    width: 100%;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 11px 10px 15px 10px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    display: ${props => props.display ? "inherit" : "none"};
`;
const HabitTitle = styled.div`
    p{
        font-size: 20px;
        color: #666666;
    }
`;
const DaySection = styled.div`
    display: flex;
`;