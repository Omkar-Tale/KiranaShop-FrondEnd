
import { Link, NavLink, Outlet } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../contexts/AppContext';

const SellerLayout = () => {

    const { setIsSeller} = useAppContext()

    const logout = async ()=>{
        setIsSeller(false)
    }

    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller-product-list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    ];

  return (
    <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <Link to="/">
                    <img className="cursor-pointer w-34 md:w-38" src={assets.logo} alt="logo" />
                </Link>
                <div className="flex items-center gap-5 text-purple-800">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='border rounded-full border-purple-800 cursor-pointer text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className='flex min-h-screen'>
                <div className="md:w-64 w-16 border-r text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item) => (
                    <NavLink to={item.path} key={item.name} end={item.path === "/seller"}
                        className={({isActive})=>`flex items-center py-3 px-4 gap-3 
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-purple-500/10 border-purple-500 text-purple-800"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                        <img src={item.icon} alt="icon logo" className='w-7 h-7' />
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}
            </div>
            <Outlet />
            </div>
        </>
  )
}

export default SellerLayout