

const { createContext, useState } = require("react");


export const themeContext =createContext();


export const ThemeContextProvider= ({children})=>{

    const [theme,setTheme]=useState("light");
    

    const toggleTheme =()=>{

       if(theme==="light")
       {
           document.body.style.background="black";
           document.body.style.color="white";
           setTheme("dark")
       }
       else{
        document.body.style.background="white";
        document.body.style.color="black";
        setTheme("light")
       }
    }


    const value ={theme,toggleTheme}

    return (
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    )
}

