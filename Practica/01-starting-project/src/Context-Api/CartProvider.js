import { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = 0, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existItem = state.items[existingItem];
    let updateItems = [];
    if (existItem) {
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingItem] = updatedItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: Number(updateTotalAmount.toFixed(2)),
    };
  }
  if (action.type === "REMOVE") {
    let totalAmount = state.totalAmount;
    const existingItem = state.items.findIndex((item) => item.id === action.id);
    let updateItems = [];
    if (state.items[existingItem].amount > 1) {
      updateItems = [...state.items].map((item) => {
        if (item.id === state.items[existingItem].id) {
          item.amount = item.amount - 1;
          totalAmount = totalAmount - item.price;
          return item;
        }
        return item;
      });
    } else {
      updateItems = state.items.filter((item) => item.id !== action.id);
      totalAmount = totalAmount - state.items[existingItem].price;
    }

    return {
      items: updateItems,
      totalAmount: Number(totalAmount.toFixed(2)),
    };
  }
  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);
  const addItems = (item) => {
    dispatchCart({ type: "ADD", item });
  };
  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE", id });
  };
  const cartStore = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItems,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={cartStore}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
