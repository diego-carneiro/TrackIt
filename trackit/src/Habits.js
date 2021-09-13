import React from 'react';
import { ReactDOM } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from "react";


export default function Habits({ token }) {

    const [isHidden, setIsHidden] = useState(true)

    function addHabit() {
        setIsHidden(false)
    }
    function cancel() {
        setIsHidden(true)
    }

    function RequestHabit() {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const body = {
            name: infos.name,
            days: selectedDays,
        }
        console.log(body)

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, body, config)
        promise.then((response) => {
            console.log(response)
        });
        promise.catch((error) => alert(error))

    }

    const [selectedDays, setSelectedDays] = useState([])

    function lockedButton(index) {

        let newSelectedDay = [];
        let newArray = [...lock];
        newArray[index].selected = !lock[index].selected
        setLock(newArray)

        newSelectedDay = lock.filter((status) => {
            return status.selected
        })
        newSelectedDay = newSelectedDay.map((res) => {
            return res.id
        });

        setSelectedDays(newSelectedDay)
    }

    const daysIcon = [
        {
            dia: 'D',
            selected: false,
            id: 0
        },
        {
            dia: 'S',
            selected: false,
            id: 1
        },
        {
            dia: 'T',
            selected: false,
            id: 2
        },
        {
            dia: 'Q',
            selected: false,
            id: 3
        },
        {
            dia: 'Q',
            selected: false,
            id: 4
        },
        {
            dia: 'S',
            selected: false,
            id: 5
        },
        {
            dia: 'S',
            selected: false,
            id: 6
        },
    ];

    const [lock, setLock] = useState(daysIcon)

    const initialValue = { name: '' }
    const [infos, setInfos] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target;

        setInfos({ ...infos, [name]: value });
    }

    return (
        <Container>
            <BodyTitle>
                <p>Meus Hábitos</p>
                <AddButton onClick={addHabit}><p>+</p></AddButton>
            </BodyTitle>
            <HabitBox hidden={isHidden}>
                <HabitName placeholder="nome do hábito" name="name" onChange={onChange}></HabitName>
                {lock.map((data, index) =>
                    <DayButton onClick={() => lockedButton(index)} color={data.selected}>
                        {data.dia}
                    </DayButton>
                )}
                <CancelButton onClick={cancel}>Cancelar</CancelButton>
                <SaveButton onClick={RequestHabit}>Salvar</SaveButton>
            </HabitBox>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100vw;
    height: 530px;
    margin-top: 70px;
    background-color: #E5E5E5;
    *{
        font-family: 'Lexend Deca', sans-serif;
    } 
    p{
        font-size: 18px;
        color: #666666;
        margin-left: 18px;
    }
`;
const BodyTitle = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 28px;
   p{
        font-size: 23px;
        color: #126BA5;
        margin-left: 18px;
        margin-top: 28px;
    }
`;
const AddButton = styled.div`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    margin-right: 18px;
    margin-top: 28px;
    p{
        font-size: 27px;
        color: #FFFFFF;
        margin: 2px 12px 0px 12px;
    }
;`
const HabitBox = styled.div`
    width: 340px;
    height: 180px;
    background-color:#FFFFFF;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 29px;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-wrap: wrap ;
    display: ${props => props.hidden ? "none" : ''};
`;
const CancelButton = styled.button`
    margin-left: 120px;
    margin-right: 23px;
    border: none;
    background: none;
    color: #52B6FF;
    font-size: 16px;
`;
const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background-color:#52B6FF;
    border-radius: 4.63636px;
    border: none; 
    font-size: 16px;
    color: #FFFFFF;
`;
const HabitName = styled.input`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 11px;
    margin-bottom: 8px;
    
    ::placeholder{
        font-size: 20px;
        color: #DBDBDB;
    }
`;
const DayButton = styled.div`
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    padding: 3px 4px 2px 7px;
    font-size: 20px;
    background-color: ${props => props.color ? '#CFCFCF' : '#FFFFFF'};
    color: ${props => props.color ? '#FFFFFF' : '#CFCFCF'};
`;

