import { useEffect, useState } from "react";
import useCart from "../CartContext";

const Product =({product}) => {
   const {addToCart,removeCart,products} = useCart();
   const [IsInCart, setIsInCart]= useState(false);
   useEffect( () => {
    const isCart = products.filter((pr) => pr.id === product.id);
    if (isCart.length >0){
        setIsInCart(true);
    }else{
        setIsInCart(false);
    }
   },[products])
    const AddToCartFun = () => {
        if(IsInCart){
            removeCart(product);
        }
        else{
            addToCart(product);
        }
       console.log(products)
    }
    return(
        <div className="card"
        style={{minHeight:"100%",
        background:`linear-gradient(rgb(0,0,0,0.1),rgb(0,0,0,0.1)),url(${product.urlImage})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"}}>
            <div className="info">
         <span>{product.name}</span>
        {/* <img src={dt.urlImage} style={{width:"100px"}} alt="" /> */}
        <span>{product.price}</span>
        </div>
        <button className={`btn ${IsInCart ? "btn-danger" : "btn-primary"} `}
        onClick={AddToCartFun}
        > {IsInCart ? "-" : "+"} </button>
    </div>
)
    }
export default Product;