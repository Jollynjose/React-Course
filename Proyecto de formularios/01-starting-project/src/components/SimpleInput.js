import { useState} from 'react';
const SimpleInput = (props) => {
  const [enteredName, setEnteredName]= useState('');
  const [nameError, setNameError] = useState(false);
  const [nameIsTouch, setNameIsTouch] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const formSubmitHandler = (e)=>{
    e.preventDefault();
    setNameIsTouch(true);
    if(enteredName.trim() === ''){
      setNameError(false);
      setErrorMessage('Name must not be empty')
      return;
    }
    setNameError(true)
    setEnteredName('');
  }
  const nameIsValid = !nameError && nameIsTouch;
  const nameInputClasses = nameIsValid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name' >Your Name</label>
        <input type='text' value={enteredName} id='name' onChange={(e)=>setEnteredName(e.target.value)}/>
        {nameIsValid && <p className={'error-text'}>{errorMessage}</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
