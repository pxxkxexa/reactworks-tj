import { useState } from "react"
import styled from "styled-components"

// 컴포넌트 스타일 정의
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 40px;
    background-color: #efefef;
    height: 100dvh;
`

const Block = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.color};
    border-radius: 8px;
    cursor: pointer;
`

const Blocks = () => {
    // 클릭한 블럭의 색상을 저장하는 상태
    const [clicked, setClicked] = useState(null);

    // 클릭 후 텍스트 색상 변경

    // 클릭 핸들러
    const handleClick = (color) => {
        setClicked(color)
    }

    return(
        <>
        <Wrapper>
            <Block onClick={() => handleClick('green')} color="green"/>
            <Block onClick={() => handleClick('blue')} color="blue"/>
            <Block onClick={() => handleClick('red')} color="red"/>
            {clicked && <p>클릭한 색상: {clicked}</p>}
        </Wrapper>
        </>
    )
}

export default Blocks