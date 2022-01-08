import React from "react";
import styled from "styled-components";

export default function MenuButton(props) {

    return(

        <Button>
            <p>{props.children}</p>
        </Button>

    );

}

// ::::::::::Styled-Components::::::::::
const Button = styled.div`

    p{
        font-size: 18px;
        color: #52B6FF;
    }
`