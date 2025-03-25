const CartItem = ({ item, updateQuantity }) => {
    return (
      <div className="cart-item">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <div className="cart-controls">
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        </div>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    );
  };
  
  export default CartItem;
  