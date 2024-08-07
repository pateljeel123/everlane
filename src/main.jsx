import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Components/CartContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <CartProvider>
    <App />
    </CartProvider>
  </BrowserRouter>
);
