import { useState } from "react"

const InputText = () => {

    const [inputValue, setInputValue] = useState("")

    //상태 변경 핸들러 함수
    const handleInputValue = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    return(
        <>
            <div>
                <h2>글자입력</h2>
                <input
                    type="text"
                    placeholder="글자입력"
                    onChange={handleInputValue}
                />
                <p>입력된 내용: {inputValue}</p>
            </div>
        </>
    )
}

export default InputText