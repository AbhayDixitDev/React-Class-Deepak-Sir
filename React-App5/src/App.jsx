// import { useState, useEffect } from 'react'
// const App = () => {
//   const [name, setName] = useState('')
//   const [name1, setName1] = useState('')
//   useEffect(() => {
//     console.log('name', name)
//     console.log('name1', name1)
//   }, [name])
//   return (
//     <div>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <input type="text" onChange={(e) => setName1(e.target.value)} />
//     </div>

//   )

// }

// export default App

import { MyComponent } from "./countContext"
import Increase from "./increase"


const App = () => {
  return (
    <MyComponent>
      <Increase />
    </MyComponent>
  )
}

export default App
