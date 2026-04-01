import axios from "axios";
import { useEffect, useState } from "react"

const AxiosGetById = ({id}) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {
            setData(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, [id]) //id가 바뀔때 마다 데이터 통신

    return(
        <>
        <div>
            <h2>할 일 관리</h2>
            {data && (
                <div>
                    <p><strong>제목: {data.title}</strong></p>
                    <p><strong>완료 여부: {data.completed ? "●완료" : "○미완료"}</strong></p>
                </div>
            )}
        </div>
        </>
    )
}

export default AxiosGetById