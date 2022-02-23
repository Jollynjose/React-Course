import { useState } from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [inputIsValid, setInputIsValid] = useState(true);
  const inputRef = useRef(0);
  const onSubmit = (e) => {
    e.preventDefault();
    const enteredInputAmount = inputRef.current.value;
    const enteredInputAmountNumber = +enteredInputAmount;
    if (
      enteredInputAmount.trim() === 0 ||
      enteredInputAmountNumber < 1 ||
      enteredInputAmountNumber > 5
    ) {
      setInputIsValid(false);
    }
    setInputIsValid(true);
    props.addCart(enteredInputAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Input
        input={{
          ref: inputRef,
          id: props.id,
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
      ></Input>
      <button>+ Add</button>
      {!inputIsValid && <p>Please enter a valid input (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
