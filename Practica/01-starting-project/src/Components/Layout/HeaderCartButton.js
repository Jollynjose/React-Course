import { useContext, useState, useEffect } from "react";
import CartContext from "../../Context-Api/cartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [headerAnimation, setHeaderAnimation] = useState(false);
  const buttonClass = `${classes.button} ${
    headerAnimation ? classes.bump : ""
  }`;

  const numberOfCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHeaderAnimation(true);
    setTimeout(() => setHeaderAnimation(false), 300);
  }, [items]);

  return (
    <button className={buttonClass} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCart}</span>
    </button>
  );
};
export default HeaderCartButton;
