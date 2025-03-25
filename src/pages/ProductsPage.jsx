import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "/src/styles/ProductPages.css";

const ProductsPage = ({ addToCart, cart, removeFromCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="products-page">
            {/* ❌ Removed duplicate navbar from here */}
            <h1 className="title">Products</h1>
            <div className="products-container">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart} 
                        removeFromCart={removeFromCart}
                        cart={cart}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
