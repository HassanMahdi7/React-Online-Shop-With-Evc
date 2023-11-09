import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './CartContext';

const root = createRoot(document.getElementById('root'));

root.render(
    <CartProvider >
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartProvider>
  
);