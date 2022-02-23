
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();
  const createTask = (taskText,taskData) =>{
    const generateID = taskData.name;
    const createdTask = {id: generateID, text: taskText}
    props.onAddTask(createdTask);
  }
  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
          url: 'https://react-http-cb14a-default-rtdb.firebaseio.com/tasks.json',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: taskText })
        }, createTask.bind(null, taskText));
   
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
