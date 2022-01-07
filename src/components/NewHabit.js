import React from "react";
import styled from "styled-components";
import { useState } from "react";

import DayIcon from "./DayIcon";

export default function NewHabit({ isHidden }) {

    const initialValue = {
        name: "",
    }

    const [habitName, setHabitName] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target;

        setHabitName({ ...habitName, [name]: value })
    }

    const allDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (

        <HabitBox display={isHidden} >
                <Input placeholder="  nome do hábito" type="text" name="email" onChange={onChange}></Input>
                <DaySection>
                    {allDays.map((info) => (
                        <DayIcon>
                            <p>{info}</p>
                        </DayIcon>
                    ))}
                </DaySection>
            <CancelButton>
                <p>Cancelar</p>
            </CancelButton>
            <CancelButton>
                <p>Salvar</p>
            </CancelButton>
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
    background-color: green;
    border-radius: 4.63636px;
    display: flex;
  
    p{
        font-size: 16px;
        color:#52B6FF;
    }
`