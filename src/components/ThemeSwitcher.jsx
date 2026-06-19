import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeSwitcher () {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <button onClick={() => setTheme(theme === "Red" ? "Blue" : "Red")}>
            Cambiar a {theme === "Red" ? "Blue" : "Red"}
        </button>
    )
}
export {ThemeSwitcher}