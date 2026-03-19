import './App.css'
import picture from './assets/hero.png'
import Example01 from './components/Example01';
import Example02 from './components/Example02';
import Event from './components/event';

// 버튼 컴포넌트 정의
function MyButton(){
  return(
    <button type='button'>클릭</button>
  )
}

function App() {
  const season = "봄";

  return (
    <>
    <div>
      <h2 className="headline">리엑트 시작하기</h2>
      {/* <h3 style={{color:'blue',fontWeight:'900'}}>JSX 문법</h3>
      <h3>현재 계절은 {season}입니다.</h3> */}
      {/* <img src={picture} alt="이미지" width="200px"/> */}
    </div>

    {/* <Example01/> */}
    {/* <Example02/> */}
    <Event/>

    {/* <div>
      <p>GOOD ~<br/>ㄱㄴㄷㄹㅁㅂㅅ</p>
      <MyButton/>
    </div> */}
    </>
  )
}

export default App
