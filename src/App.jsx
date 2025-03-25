import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const [cart, setCart] = useState([]);

  // ✅ Add or Remove from Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      return existingItem
        ? prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      {/* ✅ Navbar is only here to prevent duplicates */}
      <nav className="navbar">
        <Link to="/" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsPage addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />} />
        <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
