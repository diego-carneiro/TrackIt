import React from "react";
import styled from "styled-components";

import DayIcon from "./DayIcon";

export default function PostedHabits({ info, showHabits, setDeleteTrigger, setId }) {

    const allDays = [
        {
            id: "7",
            day: "D",
        },
        {
            id: "1",
            day: "S",
        },
        {
            id: "2",
            day: "T",
        },
        {
            id: "3",
            day: "Q",
        },
        {
            id: "4",
            day: "Q",
        },
        {
            id: "5",
            day: "S",
        },
        {
            id: "6",
            day: "S",
        },
    ];

    if (info !== null) {

        return (
            <>
                {info.map((items) => (
                    <HabitBox display={showHabits}>
                        <TopBox>
                            <HabitTitle>
                                <p>{items.name}</p>
                            </HabitTitle>
                            <TrashIcon onClick={() => {
                                setDeleteTrigger(true);
                                setId(items.id);
                            }} 
                            img src="assets/img/trash.png" />
                        </TopBox>
                        <DaySection>
                            {allDays.map((items) => (
                                <DayIcon>
                                    <p>{items.day}</p>
                                </DayIcon>
                            ))}
                        </DaySection>
                    </HabitBox>
                ))}
            </>

        );
    };

    return (
        <>
        </>
    );
}
// ::::::::::Styled-Components::::::::::
const HabitBox = styled.div`
    width: 100%;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 11px 10px 15px 10px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    display: ${props => props.display ? "inherit" : "none"};
`;
const HabitTitle = styled.div`
    p{
        font-size: 20px;
        color: #666666;
    }
`;
const DaySection = styled.div`
    display: flex;
`;
const TrashIcon = styled.img`
   width: 13px;
   height: 15px;
`;
const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;
