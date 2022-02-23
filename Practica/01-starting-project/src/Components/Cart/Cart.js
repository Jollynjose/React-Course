import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Context-Api/cartContext";
import { useContext } from "react";
import CartItem from "./CartItem.jsx";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const onRemove = (id) => {
    cartCtx.removeItem(id);
  };
  const onAdd = (item) => {
    const updateItem = {
      ...item,
      amount: 1,
    };
    cartCtx.addItems(updateItem);
  };

  return (
    <Modal>
      {cartCtx.items.map((item) => (
        <CartItem
          key={Math.random()}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={onRemove.bind(null, item.id)}
          onAdd={onAdd.bind(null, item)}
        />
      ))}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes["button--alt"]}>Send</button>
      </div>
    </Modal>
  );
};
export default Cart;
