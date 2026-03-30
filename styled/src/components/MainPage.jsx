import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
`

const Title = styled.h1`
    font-size: 2.5rem;
    color: skyblue;
`

const MainPage = () => {

    return(
        <>
        <Wrapper>
            <Title>Hello React</Title>
        </Wrapper>
        </>
    )
}

export default MainPage