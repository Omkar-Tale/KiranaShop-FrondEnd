import {useState, useEffect, useContext, createContext} from "react"
import { useNavigate } from "react-router-dom"
import { dummyProducts } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const currency = "$";
    const navigate = useNavigate()
    const [user, setUser] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState({});    

    const fetchProducts = async () => {
        setProducts(dummyProducts);
    };

    useEffect(() => {
      fetchProducts();
    }, [])


    const value = { user, setUser, isSeller, setIsSeller, products, setProducts, showUserLogin, setShowUserLogin, navigate, currency, searchQuery, setSearchQuery}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}