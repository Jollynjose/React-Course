import React , {useState}from 'react';
import AddUser from './Components/User/AddUser'
import UserList from './Components/User/UserList';

function App() {
  const [enteredData, setData] = useState([]);
  const addData = (data) =>{
    setData((prevData)=>{
      return [...prevData, data];
    });
  }
  const deleteHandler = (id)=>{
    setData([...enteredData].filter((item)=>{
      if(id !== item.id){
        return true;
      }else{
        return false
      }
    })
    );
  }
  
  return (
    <React.Fragment>
      <AddUser addDataHandler={addData}/>
      <UserList users={enteredData} delete={deleteHandler}/>
    </React.Fragment>
  );
}

export default App;
