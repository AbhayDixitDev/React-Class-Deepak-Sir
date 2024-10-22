import { useDispatch, useSelector } from "react-redux"
import { changetheme, previostheme } from "./themeSlice.jsx"
const App=()=>{
  let dispatch=useDispatch()
  let bgcol1=useSelector((state)=>state.theme.bgcol)
  return(
    <div>
      <div style={{"width":"400px","height":"400px","backgroundColor":bgcol1}}></div>
      <button onClick={()=>dispatch(changetheme())}>change</button>
      <button onClick={()=>dispatch(previostheme())}>previous</button>
    </div>
  )
}
export default App