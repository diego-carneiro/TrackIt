import React from "react";
import styled from "styled-components";

export default function NewHabit( props ) {

    console.log(props);
    return (

        <UserIcon display={props.isHidden} ></UserIcon>
    );

}
// ::::::::::Styled-Components::::::::::
const UserIcon = styled.div`
    width: 51px;
    height: 51px;
    background-color: red;
    display: ${props => props.display ? "none" : "inherit"};
`