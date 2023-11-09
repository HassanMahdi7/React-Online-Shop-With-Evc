import useCart from "../CartContext"

const CartProducts = () => {
    const { products, removeCart, total} = useCart();
    return(
        <div className="cart-products">
        <h2>Cart Product List</h2>
        {products.map((product) =>(
            <div className="cart-product">
               <div className="title-img">
               <img  src={product.urlImage} alt="" />
                <span>{product.name}</span>
               </div>
               
            <h5>{product.price}</h5>
        <span className="delete" onClick={() => removeCart(product)}>X</span>
            </div>
    ))}

    <div className="total-price">
            <h2>Total Price : ${total}</h2>
    </div>
    </div>

    )
   
}
export default CartProducts;