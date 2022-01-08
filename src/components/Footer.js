import React from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

import MenuButton from "./MenuButton";

export default function Footer() {

    const percentage = 20;

    return (
        <BotBar>
            <Link to="/habitos">
                <MenuButton>Hábitos</MenuButton>
            </Link>
            <Link to="/hoje">
                <CircularContainer>
                    <CircularProgressbar
                        value={percentage}
                        text={"Hoje"}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </CircularContainer>
            </Link>
            <Link to="/historico">
                <MenuButton>Histórico</MenuButton>
            </Link>
        </BotBar>
    );
}
// ::::::::::Styled-Components::::::::::
const BotBar = styled.div`
    width: 100vw;
    height: 70px;
    padding: 10px 18px 10px 18px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
`;
const CircularContainer = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
`