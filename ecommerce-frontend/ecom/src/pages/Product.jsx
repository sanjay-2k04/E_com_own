import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "/home/sanjay/Documents/ECOM/E_com_own/ecommerce-frontend/ecom/src/pages/Product.css";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((data) => {
                // Ensure we always display 8 products (fallback if API returns less)
                const sampleProducts = [
                    { _id: 1, name: "Product 1", price: 50, image: "https://source.unsplash.com/300x200/?product" },
                    { _id: 2, name: "Product 2", price: 40, image: "https://source.unsplash.com/300x200/?electronics" },
                    { _id: 3, name: "Product 3", price: 30, image: "https://source.unsplash.com/300x200/?gadgets" },
                    { _id: 4, name: "Product 4", price: 25, image: "https://source.unsplash.com/300x200/?fashion" },
                    { _id: 5, name: "Product 5", price: 60, image: "https://source.unsplash.com/300x200/?shoes" },
                    { _id: 6, name: "Product 6", price: 35, image: "https://source.unsplash.com/300x200/?bag" },
                    { _id: 7, name: "Product 7", price: 80, image: "https://source.unsplash.com/300x200/?watch" },
                    { _id: 8, name: "Product 8", price: 55, image: "https://source.unsplash.com/300x200/?perfume" },
                ];
                setProducts(data.length >= 8 ? data.slice(0, 8) : sampleProducts);
            });
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">E-Shop</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>

            {/* Products Section */}
            <div className="products-container">
                <h1>Available Products</h1>
                <div className="product-grid">
                    {products.map((product) => (
                        <div className="product-card" key={product._id}>
                            <img src={product.image || "https://via.placeholder.com/150"} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
