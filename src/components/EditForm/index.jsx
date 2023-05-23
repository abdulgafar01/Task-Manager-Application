import styles from './editform.module.css'
import { useState } from 'react';

export function EditForm({onClose, onEditTask, task}){


    const [updatedTitle, setUpdatedTitle] = useState(task.title);
    const [updatedDescription, setUpdatedDescription] = useState(task.description);

    const submitTask = (e)=>{
        e.preventDefault();
        onEditTask(updatedTitle,updatedDescription);
        onClose();
    }

    return(
        <>
        <div className={styles.modal}>
            <div className={styles.form}>
            <h2>Edit Task</h2>
            <form onSubmit={submitTask}>
            <input
                type="text"
                placeholder="Task Title"
                value={updatedTitle}
                onChange={e=> setUpdatedTitle(e.target.value)}
            />
            <textarea
                placeholder="Task Description"
                value={updatedDescription}
                onChange={e=> setUpdatedDescription(e.target.value)}
            ></textarea>
            <button type='submit'>Update Task</button>
        </form>
            </div>
        </div>

        </>
    )
};
