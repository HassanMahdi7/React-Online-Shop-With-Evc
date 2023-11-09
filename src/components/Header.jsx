import { Link } from 'react-router-dom';
import '../style.css';
import useCart from '../CartContext';

const Header = () =>{
    const {products} = useCart();
    return (
        <div className="Menu">
            <Link className='logo' to="/">Mr Xarago</Link>
            <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/cart">Cart</Link>
            </div>
            <Link to="/cart"><span className='cart'>{products.length}</span> </Link>
           
        </div>
    )
}
export default Header