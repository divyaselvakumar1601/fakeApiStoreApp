import CartItem from "../components/CartItem";

const CartPage = ({ cart, updateQuantity }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountPrice = totalPrice * 0.9; // 10% discount

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
          ))}
          <h3>Total Price: ${discountPrice.toFixed(2)} (10% Discount Applied)</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
