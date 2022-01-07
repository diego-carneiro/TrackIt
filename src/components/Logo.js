import styled from "styled-components";

export default function Logo () {

    return (
        <LogoImg src="/assets/img/trackitlogo.png" />
    );

}
// ::::::::::Styled-Components::::::::::
const LogoImg = styled.img`
    width: 180px;
    height: 178px;
    margin-top: 68px;
`;