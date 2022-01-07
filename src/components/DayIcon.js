import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function DayIcon(props) {

    const [isSelected, setIsSelected] = useState(false);

    const Toggle = () => {

        isSelected ? setIsSelected(false) : setIsSelected(true);  
    }

    return(
        <DayButton color={isSelected} onClick={Toggle}>
              <p>{props.children}</p>
        </DayButton>

    );

}
// ::::::::::Styled-Components::::::::::
const DayButton = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color ? "#CFCFCF" : "#FFFFFF"};

    p{
        font-size: 20px;
        color: ${props => props.color ? "#FFFFFF" : "#DBDBDB" }
    }
`;