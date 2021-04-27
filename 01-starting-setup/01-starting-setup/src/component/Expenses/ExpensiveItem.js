import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpensiveItem.css';
import Card from '../UI/Card';


const ExpensiveItem = (props) => {
    const [title, setTitle]= useState(props.title);
    
    const clickHandler = () =>{
        setTitle(prompt());
    }
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2 className="expense-item">{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}
export default ExpensiveItem;
