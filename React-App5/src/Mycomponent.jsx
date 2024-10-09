import { ThemeContext } from "./colorContext.jsx"
import { useContext } from "react"
const MyComponent = () => {
    const { color, setColor } = useContext(ThemeContext)
    const cc=()=>{
        setColor("blue")
    }
    return (
        <div>
            <h1 style={{ color: color }}>MyComponent</h1>
            <p>Color: {color}</p> 
            <button onClick={cc}>Change Color</button>
        </div>
    )
}

export default MyComponent