import { useContext } from "react";
import Model from "./UI/Model";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "../components/UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((totalItemPrice, item) => {
    return totalItemPrice + item.quantity * item.price;
  }, 0);

  function closeCart() {
    userProgressCtx.hideCart();
  }

  function handleCheckout(){
    userProgressCtx.showCheckOut();
  }

  return (
    <Model className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart"? closeCart: null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={closeCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Model>
  );
}
