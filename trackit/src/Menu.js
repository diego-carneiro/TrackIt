import styled from 'styled-components';

export default function Main_Page() {
    return (
        <Container>
            <Myhabits>
                <p>Meus Hábitos</p>
                <Button>
                    <p>+</p>
                </Button>
            </Myhabits>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>   
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100vw;
    height: 530px;
    margin-top: 70px;
    background-color: #E5E5E5;
    *{
        font-family: 'Lexend Deca', sans-serif;
    } 
    p{
        font-size: 18px;
        color: #666666;
        margin-left: 18px;
    }
`;
const Myhabits = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 28px;
   p{
        font-size: 23px;
        color: #126BA5;
        margin-left: 18px;
        margin-top: 28px;
    }
`;
const Button = styled.div`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    margin-right: 18px;
    margin-top: 28px;
    p{
        font-size: 27px;
        color: #FFFFFF;
        margin: 2px 12px 0px 12px;
    }
;`
