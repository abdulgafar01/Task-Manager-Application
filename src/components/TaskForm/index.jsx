import styles from './taskform.module.css'
import { useState } from 'react';
export function TasksForm({onClose, onAddTask}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitTask = (e)=>{
        e.preventDefault();
        onAddTask(title,description);
        onClose();
    }


    return(
        <>
        <div className={styles.modal}>
            <div className={styles.form}>
            <h2>Create a  task</h2>
            <form onSubmit={submitTask}>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={e=> setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={e=> setDescription(e.target.value)}
            ></textarea>
            <button type='submit'>Add Task</button>
        </form>
            </div>
            </div>
    
    </>
    );
};