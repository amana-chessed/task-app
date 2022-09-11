import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function TaskAdder(){
    const [inputText, setText] = useState("");

    function addTaskHandler(){
        if(isEmptyOrSpaces(inputText)) {
            toast.info("Please input task details");
            return;
        }
        
        fetch('/tasks/add',
            {   
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({"details": inputText})
            }
        )
        .then(res => {
            if(!res.ok){
                toast.error("Error adding task");
            }
            toast.success("Task added successfully");
        })
        .catch(e => {
            toast.error("Error adding task. " + e);
        });
        setText("");
    }

    function onChangeHandler(evt){
        setText(evt.target.value);
    }

    function isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }

    return (
        <div>
            <input type="text" value={inputText} placeholder="Input task" onChange={evt => onChangeHandler(evt)}></input>
            <button className='btn' onClick={addTaskHandler}><FontAwesomeIcon icon={faPlusSquare}/></button>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default TaskAdder;