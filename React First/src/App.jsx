import { useState } from 'react'
import './App.css'

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
      <h1 style={{fontSize:"50px",color:"Red",fontWeight:"800"}}>Hello World!</h1>
      <button style={btnCss}>Click Here</button>
    </>
  )
}

export default App
