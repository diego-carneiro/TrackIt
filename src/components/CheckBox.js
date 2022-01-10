import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function CheckBox({ children, count, setCount, id, setId, checkHabit, uncheckHabit, info }) {

    const [isChecked, setIsChecked] = useState(false);

    function toggle() {

        isChecked ? setIsChecked(false) : setIsChecked(true);
        isChecked ? setCount(count - 1) : setCount(count + 1);
    }

    if (isChecked === true) {

        return (
            <CheckIcon color={info.done} onClick={() => {
                toggle();
                setId(id);
                uncheckHabit();
            }}>
                {children}
            </CheckIcon>
        );
    }

    return (
        <CheckIcon color={info.done} onClick={() => {
            toggle();
            setId(id);
            checkHabit();
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