import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function CheckBox({ children, id, checkHabit, uncheckHabit, info, contador, setContador }) {

    const [isChecked, setIsChecked] = useState(false);

    function toggle() {

        isChecked ? setIsChecked(false) : setIsChecked(true);
        isChecked ? setContador(contador - 1) : setContador(contador + 1);
    }

    if (info === true) {

        return (
            <CheckIcon color={info} onClick={() => {
                toggle();
                uncheckHabit(id);
            }}>
                {children}
            </CheckIcon>
        );
    }

    return (
        <CheckIcon color={info} onClick={() => {
            toggle();
            checkHabit(id);
        }}>
            {children}
        </CheckIcon>
    );
}
// ::::::::::Styled-Components::::::::::
const CheckIcon = styled.button`
    width: 69px;
    height: 69px;
    background: ${props => props.color ? "#8FC549" : "#EBEBEB"};
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    display: flex;
    justify-content: center;
    align-items: center;
`