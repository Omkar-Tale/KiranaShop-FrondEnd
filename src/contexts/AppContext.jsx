import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom"

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const currency = "$";
    const [user, setUser] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const navigate = useNavigate()

    const value = { user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin, navigate, currency}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}