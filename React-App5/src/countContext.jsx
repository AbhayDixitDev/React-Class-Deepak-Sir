import { createContext, useState } from "react"
const CountContext = createContext()

const MyComponent = ({ children }) => {
    let [count, setCount] = useState(0)
    return (
        <>
            <CountContext.Provider value={{ count, setCount }}>
                {children}
            </CountContext.Provider>
        </>
    )
}
export { MyComponent, CountContext }
