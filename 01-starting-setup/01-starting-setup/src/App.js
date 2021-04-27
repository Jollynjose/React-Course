import Expenses from './component/Expenses/Expenses'
import NewExpense from './component/NewExpense/NewExpense'
import React, {useState} from 'react';

const OLDDATA = [
  {id: '5205', title: "Bag", amount:"180.25", date: new Date(2022,5,12)},
  {id: '5204', title: "Potatoes", amount:"18.85", date: new Date(2021,4,27)},
  {id: '5203', title: "iPAD", amount:"200.00", date: new Date(2021,3,25)}
];
const App = () =>{
  const [data, setData]= useState(OLDDATA);
  const addExpressHandler = (expense) =>{
    setData((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpressHandler}/>
      <Expenses data = {data}/>
      
    </div>
  );
}

export default App;
