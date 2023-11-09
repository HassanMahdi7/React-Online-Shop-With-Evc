import { createContext, useContext, useReducer } from "react";
import CartReducer, { inSt } from "./CartReducer";

const CartContext = createContext(inSt);

export const CartProvider = ({children}) =>{

   const [state,dispatch] =  useReducer(CartReducer,inSt);

const addToCart = (product) =>{
    const Edpr = state.products.concat(product);
    Calculate(Edpr);
    dispatch({
        type:"AddToCart",
        payload: {
            products: Edpr
        }
    });
};
const removeCart = (product) =>{
    const Edpr = state.products.filter(p => p.id !== product.id)
    Calculate(Edpr);
    dispatch({
        type:"RemoveFromCart",
         payload:{
        products: Edpr
    }});
}
const Calculate = (products) =>{
    let total = 0;
    products.forEach(product =>{
        total += product.price;
    });
    dispatch({
        type:"CalTotal",
        payload : total,
    })
};
const clearCart = (products) =>{
    dispatch({
        type : "ClearCart",
        payload : inSt
    });
}
const values={
    products: state.products,
    total: state.total,
    addToCart,removeCart,Calculate,clearCart
}
return <CartContext.Provider value={values}>
    {children}
</CartContext.Provider>
}
const useCart = () =>{
    const context = useContext(CartContext);
    if(context === undefined){
        throw new Error("Context Must be used In The context");
    }
    return context;
}
export default useCart;