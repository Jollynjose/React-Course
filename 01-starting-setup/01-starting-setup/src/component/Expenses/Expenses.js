import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [actualState, setState] = useState("2021");
  
  
  const filterData=props.data.filter((e)=>{
        if(e.date.toString().includes(actualState)){
          return true
       }else{      
          return false
        }      
      })
    
  
  const selectedChangeState = (state) => {
    setState(state); 
  };
  
  
  return (
    <Card className="expenses">
      <ExpensesFilter actualYear={actualState} dropChange={selectedChangeState} />
      <ExpensesList items={filterData}/>
    </Card>
  );
};
export default Expenses;
