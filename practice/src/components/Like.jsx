import { useState } from "react";

const Like = () => {
    //const[변수, 함수]
    const[likeCount, setLikeCount] = useState(0)

    //상태 변경 핸들러 함수
    const handleLike = () => {
        setLikeCount(likeCount +1)
    }

    return(
        <>
        <h2>Like</h2>
        <button type="button" onClick={handleLike}>좋아요</button>{' '}
        <p style={{display:"inline-block"}}>{likeCount}</p>
        </>
    )
}

export default Like