import {CounterAction} from '../store/index'
import {useSelector, useDispatch} from 'react-redux'
import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state => state.showToggle)

  const incrementHandler = () => {
    dispatch(CounterAction.increment());
  };
  const increaseHandler = ()=>{
    dispatch(CounterAction.increase(10))
  }
  const decrementHandler = () => {
    dispatch(CounterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(CounterAction.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
