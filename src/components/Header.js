import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AuthContext } from "../providers/auth";

export default function Header () {
    
    const saved = localStorage.getItem("userImg");
    
    const [image, setImage] = useState(() => {

        const saved = localStorage.getItem("userImg");

        return saved;
    });

    return (

        <TopBar>
            <Icon src="/assets/img/TrackIt.png"/>
            <UserIcon src={image} />
        </TopBar>

    );
}
// ::::::::::Styled-Components::::::::::
const TopBar = styled.div`
    width: 100vw;
    height: 70px;
    padding: 10px 18px 10px 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
`;
const Icon = styled.img`
`
const UserIcon = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
`