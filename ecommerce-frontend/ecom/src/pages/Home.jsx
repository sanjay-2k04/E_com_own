import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "/home/sanjay/Documents/ECOM/E_com_own/ecommerce-frontend/ecom/src/pages/Home.css";

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login"); // Redirect to LoginSignup page
    };

    const handleLogout = () => setIsLoggedIn(false);

    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">
                    <h2>MyShop</h2> {/* Replace with an <img> tag for a logo */}
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/products" className="nav-item">Products</Link>
                    <Link to="/cart" className="nav-item">Cart</Link>
                    {isLoggedIn ? (
                        <button className="auth-btn" onClick={handleLogout}>Logout</button>
                    ) : (
                        <button className="auth-btn" onClick={handleLogin}>Login</button>
                    )}
                </div>
            </nav>

            {/* Image Section */}
            <div className="image-section">
                <img src="https://source.unsplash.com/960x500/?fashion" alt="Fashion" />
                <img src="https://source.unsplash.com/960x500/?electronics" alt="Electronics" />
                <img src="https://source.unsplash.com/960x500/?shopping" alt="Shopping" />
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3>About Us</h3>
                        <p>We provide the best quality products at unbeatable prices. Your satisfaction is our priority!</p>
                    </div>
                    <div className="footer-section links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h3>Contact Us</h3>
                        <p>Email: acsanjay0001.com</p>
                        <p>Phone: +91 9443902537</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 MyShop. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
