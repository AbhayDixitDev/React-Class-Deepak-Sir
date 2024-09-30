const arr=["ram","shyam","gopal","mohan","krishna"];

const App=()=> {
const ans=arr.map((key)=>{
  return (
  <li><h3>{key}</h3></li>
  )
})

  return (
    <>
    <ol>
       {ans}
    </ol>
   
    
    </>
  )
}

export default App
