import { createContext, useState } from "react"
const ThemeContext = createContext()

const ColorContext = ({ children }) => {
    let [color, setColor] = useState("red")
    return (
        <ThemeContext.Provider value={{ color, setColor }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ColorContext, ThemeContext }
