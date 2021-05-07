import React, {useState, useRef}from 'react';
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props)=>{
    const nameInputRef= useRef();
    const ageInputRef= useRef();
    const [error, setError] = useState();

    const addUserHandler = e =>{
        e.preventDefault();

        const userName = nameInputRef.current.value;
        const userAge =ageInputRef.current.value;
        if(userName.trim().length === 0 && userAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'please enter a valid name and age (non-empty values)'
            })
            return;
        }else if(+userAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please a eneter a valid age (> 0)'
            })
            return;
        }
        const user = {
            id: Math.random(),
            name: userName,
            age: userAge
        }
        
        props.addDataHandler(user);
        
    }
    const errorHandler = ()=>{
        setError(null);
    }

    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"  ref={nameInputRef}></input>
                    <label htmlFor="age">Your Age</label>
                    <input id="age" type="number" ref={ageInputRef}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
        
        
    );
}

export default AddUser;