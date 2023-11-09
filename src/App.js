import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Cart from './pages/cart';
import Contact from './pages/contact';
import { useState } from 'react';
import {Toaster} from "react-hot-toast";

const App = () =>{
    const [cart, setCart] = useState(5);
    return (
        <div className='container'>
            <Toaster />
            <Header cart={cart} setCart={setCart}/>
            <Routes>    
             <Route path='/' element={<Home />}>Home</Route>
             <Route path='/about' element={<About />}>About</Route>
             <Route path='/contact' element={<Contact />}>Contact</Route>
             <Route path='/cart' element={<Cart setCart={setCart}/>}>Cart</Route>
            </Routes>
            
        </div>
    );
}

export default App;