import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, addToCart, removeFromCart, cart }) => {
    // Check if the product is already in the cart
    const isInCart = cart.some((item) => item.id === product.id);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button 
                className={isInCart ? "remove-button" : "add-button"} 
                onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product)}
            >
                {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
};

export default ProductCard;
