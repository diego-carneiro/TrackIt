import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

import DayButton from "./DayButton";


export default function NewHabit({ isHidden, setIsHidden, setHabitInfo, setPostTrigger }) {

    const initialValue = {
        name: "",
    }

    const [habitName, setHabitName] = useState(initialValue);

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

    const [marked, setMarked] = useState([]);

    function addDay(id) {

        const list = [...marked, id]
        setMarked(list);
        setHabitInfo(
            {
                name: habitName.name,
                days: marked,
            }
        )
    }

    function removeDay(id) {

        const filtered = marked.filter(index => {
            if (id === index) {
                return false;
            } else {
                return true;
            };

        })
        setMarked(filtered);
        setHabitInfo(
            {
                name: habitName.name,
                days: marked,
            }
        )
    }

    useEffect(() => {

        setHabitInfo(
            {
                name: habitName,
                days: marked,
            }
        );
    }, [habitName, marked]);

    return (

        <HabitBox display={isHidden} >
            <Input placeholder="  Nome do hábito" type="text" name="name" onChange= {(e) => setHabitName(e.target.value)}></Input>
            <DaySection>
                {allDays.map((info) => (
                    <DayButton id={info.id} addDay={addDay} removeDay={removeDay}>
                        <p>{info.day}</p>
                    </DayButton>
                ))}
            </DaySection>
            <CancelButton onClick={() => {
                setIsHidden(true);
            }}>
                <p>Cancelar</p>
            </CancelButton>
            <SaveButton onClick={() => {
                setPostTrigger(true)
                setIsHidden(true);
            }}>
                <p>Salvar</p>
            </SaveButton>
        </HabitBox>
    );
}
// ::::::::::Styled-Components::::::::::
const HabitBox = styled.div`
    width: 100%;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px 18px 15px 18px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    display: ${props => props.display ? "none" : "inherit"};
    & ::placeholder{
        color: #DBDBDB;
    }
`;
const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px;
    margin-bottom: 6px;
`;
const DaySection = styled.div`
    display: flex;
`;
const CancelButton = styled.div`
    width: 84px;
    height: 35px;
    background-color: #FFFFFF;
    border-radius: 4.63636px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 16px;
        color:#52B6FF;
    }
`
const SaveButton = styled.div`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 16px;
        color: #FFFFFF;
    }
`