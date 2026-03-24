const DrinkList = ({drinks}) => {


    return(
        <>
            <div>
                {/* join()는 배열에서 제공되는 문자연결 함수 */}
                {/* <p>현재 음료: {drinkName.join(', ')}</p> */}
                <ul className="drink-list">
                    {drinks.map((drink, index) => (
                        <li key={index}>{drink}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default DrinkList