import { useState, createContext } from "react";

//Создаем контекст для темы
const ThemeContext = createContext();

// Поставщик темы
function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };