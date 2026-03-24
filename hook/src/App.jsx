import { useState } from 'react'
import './App.css'
import Dog from './components/dog'
import Garden from './components/Garden'
import Counter from './components/Counter'
import Car from './components/Car'
import AddProduct from './components/AddProduct'
import Box from './components/Box'
import AddDrink from './components/AddDrink'
import User from './components/User'
import Clock from './components/Clock'
import Profile from './card/profile'


function App() {

  return (
    <>
      {/* <h2>state - 상태관리</h2> */}
      {/* <Box></Box> 사이의 모든 것이 {children}으로 전달*/}
      {/* <Box>
        <h3>박스 안 내용</h3>
        <p>이것은 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box>
      <Box>
        <h3>또 다른 박스</h3>
        <p>이것은 또 다른 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box> */}
      {/* <AddProduct/> */}
      {/* <Car/> */}
      {/* <Counter/> */}
      {/* <Garden /> */}
      {/* <Dog breed = "말티즈" age = {3}/>
      <Dog breed = "치와와" age = {4}/>       */}

      {/* <AddDrink/> */}
      {/* <User/> */}
      {/* <Clock/> */}
      <Profile/>
    </>
  )
}

export default App
