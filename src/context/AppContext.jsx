import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [profile,setProfile] = useState("Sabarish")
    const [showError,setShowError] = useState(false)
    const [username,setUsername] = useState("")
    const [uname,setUname] = useState(localStorage.getItem("u_name") ? localStorage.getItem("u_name") : "")
    const [login,setLogin] = useState(uname ? true : false)

    const values = {
        login,setLogin,
        profile,setProfile,
        showError,setShowError,
        username,setUsername,
        uname,setUname
    }

    return (

        <AppContext.Provider value={values}>

            {props.children}


        </AppContext.Provider>
    )
}

export default AppContextProvider