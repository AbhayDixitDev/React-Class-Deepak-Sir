import { useState } from 'react'
import './App.css'
import "./style.css"
import img from "./assets/img1.jpeg"
function App() {

const btnCss={
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'

}
  return (
    <>
      <img src={img}/>
          <br />
      <h1 style={{fontSize:"50px",color:"Red",fontWeight:"800"}}>Hello World!</h1>
      <button style={btnCss}>Click Here</button>
      <button id="new">External Click Here</button>
    </>
  )
}

export default App
