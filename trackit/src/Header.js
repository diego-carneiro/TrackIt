import styled from 'styled-components';
export default function Header() {

    return (
        <TopBar>
            <Logo src="/img/Trackitlogo.svg" />
            <UserImg src="https://lh3.googleusercontent.com/a-/AOh14GjTnJbmLT25RAGPxQBxeA2lNiGwWGNT8GhJF04ejR0=s288-p-rw-no"/>
        </TopBar>
    );
}
// ::::::::::Styled-Components::::::::::
const TopBar = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    justify-content:space-between;
    position: fixed;
    top: 0;
    z-index: 5;
    *{
        font-family: 'Lexend Deca', sans-serif;
    }
`;
const Logo = styled.img`
    width: 97px;
    height: 49px;
    margin-left: 18px;
`;
const UserImg = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 18px;
`;