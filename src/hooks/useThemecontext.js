import ThemeContext from "@/contexts/ThemeContext"
import { useContext } from "react";
// const { useContext } = require("react")


const useTheme = () => {
    const theme = useContext(ThemeContext)
    const isClient = typeof window !== "undefined"
    if (!isClient && !theme) {
        return {}
    }
    if (!theme) {
        throw new Error("you must wrap your application with ThemeProvider at use the useTheme")
    }
    return theme;
}

export default useTheme;