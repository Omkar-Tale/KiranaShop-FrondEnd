import {useState, useEffect, useContext, createContext} from "react"
import { useNavigate } from "react-router-dom"
import { dummyProducts } from "../assets/assets";
import {toast} from "react-hot-toast"

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const currency = "$";
    const navigate = useNavigate()
    const [user, setUser] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState({})
    const [searchQuery, setSearchQuery] = useState({});    

    const fetchProducts = async () => {
        setProducts(dummyProducts);
    };

    const addToCart = (itemId)=>{
        const cartData = structuredClone(cartItem);
        if(cartData[itemId]){
            cartData[itemId] += 1;
        }else{
            cartData[itemId] = 1
        }
        setCartItem(cartData);
        toast.success("Added to Cart")
    }

    const updateCartItem = ()=> {
        const cartData = structuredClone(cartItem);
        cartData[itemId] = quantity;
        setCartItem(cartData);
        toast.success("Cart Updated")
    }

    const deleteCartItem = (itemId)=>{
        const cartData = structuredClone(cartItem);
        if(cartData[itemId]){
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0){
                delete cartData[itemId]
            }
        }
        toast.success("remove from cart")
        setCartItem(cartData)
    }

    useEffect(() => {
      fetchProducts();
    }, [])


    const value = { user, setUser, isSeller,updateCartItem, addToCart, deleteCartItem, cartItem, setIsSeller, products, setProducts, showUserLogin, setShowUserLogin, navigate, currency, searchQuery, setSearchQuery}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}