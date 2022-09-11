import {useState} from "react";
import Task from "./Task";

function TaskList(props){
    
    return (
      <div>
        {
          props.list.map( (task) =>(
            <Task key={task._id} details={task.details} id={task._id}
            />
          ))
        }
      </div>
    );
}

export default TaskList;