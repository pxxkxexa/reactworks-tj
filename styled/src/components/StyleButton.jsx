import styled from "styled-components"

//버튼 정의
const Button = styled.button`
    padding: 10px 20px;
    margin: 10px;
    font-size: 1rem;
    background-color: #007eff;
    border: unset;
    color: #f0f0f0;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: #0056b3;
    }
`

/*  Button 컴포넌트 상속 받아 RoundedButton 생성
    상속의 형태 : styled(부모 컴포넌트)
*/
const RoundedButton = styled(Button)`
    border-radius: 50px;
`

const StyleButton = () => {

    return(
        <>
            <Button>Click Me</Button>
            <RoundedButton>Click Me</RoundedButton>
        </>
    )
}

export default StyleButton