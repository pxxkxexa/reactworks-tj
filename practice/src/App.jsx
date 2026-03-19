import './App.css'
import Footer from './components/Footer';
import Header from './components/header';
import Main from './components/Main';

function App() {

  const userName = "박예나";
  const isLogin = true;
  let message;

  if(isLogin){
    message = <p>환영합니다</p>
  }else{
    message = <p>로그인해주세요</p>
  }
      

  return (
    <>
      <h2>리엑트 연습 문제</h2>
      <p>{userName}님 환영합니다.</p>

      {/* {isLogin ? <p>환영합니다</p> : <p>로그인해주세요</p>}
      {isLogin && <p>환영합니다</p>} */}
     
      {message}

      <Header/>
      <Main/>
      <Footer/>

    </>
  )
}

export default App
