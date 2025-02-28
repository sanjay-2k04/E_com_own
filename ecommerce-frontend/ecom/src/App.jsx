import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "/home/sanjay/Documents/ecommerce_website/ecommerce-frontend/ecom/src/pages/Home.jsx";
import Products from "/home/sanjay/Documents/ecommerce_website/ecommerce-frontend/ecom/src/pages/Product.jsx";
import Cart from "/home/sanjay/Documents/ecommerce_website/ecommerce-frontend/ecom/src/pages/Cart.jsx";
import LoginSignup from "/home/sanjay/Documents/ecommerce_website/ecommerce-frontend/ecom/src/components/LoginSignup.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginSignup />} />
            </Routes>
        </Router>
    );
}

export default App;
