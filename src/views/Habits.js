import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import NewHabit from "../components/NewHabit";
import { AuthContext } from "../providers/auth";

export default function Habits() {

    const { user, setUser } = React.useContext(AuthContext);

    const [isHidden, setIsHidden] = useState(true);

    return (

        <>
            <Header />
            <Container>
                <TittleSection>
                    <p>Meus hábitos</p>
                    <PlusButton onClick={() => {
                        setIsHidden(false);
                    }}>
                        <p>+</p>
                    </PlusButton>
                </TittleSection>
                <NewHabit isHidden={isHidden} />
                <InteractionBox>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </InteractionBox>
            </Container>

        </>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    padding: 20px 18px 20px 18px;
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
const PlusButton = styled.div`
   width: 40px;
   height: 35px;
   background-color: #52B6FF;
   border-radius: 4.63636px;
   display: flex;
   justify-content: center;
   align-items: center;

   p{
       color: #FFFFFF;
   }
`
const Lala = styled.div`
    width: 51px;
    height: 51px;
    background-color: green;
`
const InteractionBox = styled.div`
    margin-top: 30px;
    p{
        font-size: 18px;
        color: #666666;
    }
`