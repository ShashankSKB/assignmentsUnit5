const { createContext, useState } = require("react");


const themeContext =createContext();


const ThemeContextProvider= ({children})=>{

    const [dark,setDark]=useState(false);
    const [light,setLight]=useState(true);

    const toggleTheme =()=>{

        setDark(!dark);
        setLight(!light)
    }


    const value ={dark,light,toggleTheme}

    return (
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    )
}