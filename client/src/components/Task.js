import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from './Modals';
import Backdrop from './Backdrop';

function Task(props){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    function deleteTaskHandler(){
        setModalIsOpen(false);
        fetch(`/tasks/delete/${props.id}`,
            {   
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({"id": props.id})
            }
        )
    }

    function updateTaskHandler(){
        setModalIsOpen(false);
        fetch(`/tasks/update/${props.id}`,
            {   
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({"id": props.id})
            }
        )
    }

    return (
        <div className="card">
            <div>
                <input type="checkbox" ></input>{props.details}
                
                <button className='card-btn' onClick={deleteHandler}><FontAwesomeIcon icon={faTrashCan}/>{props.buttonText}</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={deleteTaskHandler} />}
            {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
    );
}

export default Task;