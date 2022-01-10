import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MenuButton() {

    return(
        <>
            <Header />
            <Container>
                <TittleSection>
                    <p>Histórico</p>
                </TittleSection>
                <InteractionBox>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </InteractionBox>
            </Container>
            <Footer />
        </>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    padding: 20px 18px 20px 18px;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 70px;
`
const TittleSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    
    p{
        font-size: 23px;
        color: #126BA5;
    }
`
const InteractionBox = styled.div`

    p{
        font-size: 18px;
        color: #666666;
    };
`