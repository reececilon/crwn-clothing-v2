import { createContext, useState } from "react";
import PRODUCTS from '../shop-data.json';
//As the actual value you want to access
export const ProductsContext = createContext({
    products: [],
    // setCurrentUser: () => null,
});


export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {
        products,
        // setProducts
    }

    return <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
}