import { categories } from "../assets/assets.js";
import ProductItem from "../components/ProductItem.jsx";
import { useAppContext } from "../contexts/AppContext"
import { useParams } from 'react-router-dom';

const ProductCategory = () => {
    const { products } = useAppContext();
    const { category } = useParams();

    const searchCategories = categories.find((item)=> item.path.toLowerCase() === category.toLowerCase());

    const filterProducts = products.filter((p)=> p.category.toLowerCase() === category.toLowerCase())
  return (
    <div className='mt-10 px-3 sm:px-10'>
        {searchCategories && (
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium'>{searchCategories.text.toUpperCase()}</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 mt-6">
        {filterProducts.map((p, index) => (
            <ProductItem key={index} product={p} />
        ))}
        </div>
    </div>
  )
}

export default ProductCategory