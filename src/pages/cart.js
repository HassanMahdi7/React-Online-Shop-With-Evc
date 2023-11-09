import useCart from "../CartContext"
import CartProducts from "../components/CartProducts"
import Payments from "../components/Payments"
const Cart = () =>{
    const {products} = useCart();
    if(products.length <= 0) return <h1>The Cart Is Empty</h1>
    return (
        <div className="cart-container">
            <CartProducts />
            <Payments />
        </div>
    )
}
export default Cart