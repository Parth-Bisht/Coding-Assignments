import React,{ createContext} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = React.useState("white");

    const toggleTheme = ()=>{
        if(theme=="white"){
            setTheme("black")
        }
        else{
            setTheme("white")
        }
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
    )
}