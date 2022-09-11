import './App.css';
import { useState, useEffect, useRef } from  'react';
import TaskAdder from './components/TaskAdder';
import TaskList from './components/TaskList';

function App() {
  const [taskList, setTaskList] = useState([]);
  const {current: taskRef} = useRef(taskList);

  useEffect(() => {
      fetch("/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTaskList(data);
      })
      .catch((err)=>{
        console.log(err);
      });
  }, [taskRef]);

  return (
    <div className="App">
      <h1>Add Task</h1>
      <TaskAdder />
      <h1>Tasks List</h1>
      {taskList.length>0?<TaskList list={taskList}/>:<p>No Task</p>}
      
    </div>
  );
}

export default App;
