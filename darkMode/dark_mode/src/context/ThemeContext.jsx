const { createContext ,useState} = require("react");



export const ThemeContext= createContext()

export const ThemeContextProvider= ({children})=>{


    const [isDarkMode,setisDarkMode]=useState(true);

    const ToggleTheme=()=>{
        
        setisDarkMode(!isDarkMode)
        console.log("theme dark",isDarkMode)

        if(isDarkMode)
        {
            document.body.style.backgroundColor="black"
            document.body.style.color="white"
            
        }
        else
        {
            document.body.style.backgroundColor="white"
            document.body.style.color="black"
        }
        
    }

    const value ={isDarkMode,ToggleTheme}

    return(
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}