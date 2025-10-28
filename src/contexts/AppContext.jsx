import {useState, useEffect, useContext, createContext, createRef} from "react"
import { useNavigate } from "react-router-dom"
import { dummyProducts } from "../assets/assets";
import {toast} from "react-hot-toast"
import axios from "axios"

axios.defaults.withCredentials = true  //to send the cookies 
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL  //bydefualt uses base url

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

    const fetchSeller = async ()=>{
        try {
            const {data} = await axios.get("/api/seller/isSellerAuth")
            if(data.success){
                setIsSeller(true)
            }else{
                setIsSeller(false)
            }
        } catch (error) {
            setIsSeller(false)
        }
    }

    const fetchUser = async ()=>{
        try {
            const {data} = await axios.get("api/user/is-auth")
            if(data.success){
                setUser(true)
            }else{
                setUser(false)
            }
        } catch (error) {
            setUser(false)
        }
    }

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

    const updateCartItem = (itemId, quantity)=> {
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

    const getCartCount = () => {
        let totalCount = 0;
        for(const item in cartItem){
            totalCount += cartItem[item]
        }
        return totalCount;
    }

    const getCartAmount = ()=> {
        let totalCount = 0;
        for(const item in cartItem){
            const infoCopy = products.find((product) => product._id === item);
            totalCount += infoCopy.offerPrice * cartItem[item];
        }
        return Math.round(totalCount * 100)/100;
    }

    useEffect(() => {
        fetchUser();
        fetchSeller();
        fetchProducts();
    }, [])


    const value = { user, setUser, getCartCount, axios,  getCartAmount, isSeller,updateCartItem, addToCart, deleteCartItem, cartItem, setIsSeller, products, setProducts, showUserLogin, setShowUserLogin, navigate, currency, searchQuery, setSearchQuery}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}