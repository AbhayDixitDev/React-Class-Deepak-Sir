import { useContext } from "react"
import { CountContext } from "./countContext"

 const Increase = () => {
    const { count, setCount } = useContext(CountContext)
    const increase = () => {
        setCount(count + 1)
    }
    return (
        <>
        {count}
        <button onClick={increase}>Increase</button>
        </>
    )
 }

 export default Increase
