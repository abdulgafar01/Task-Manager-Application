import styles from './taskform.module.css'
export function TasksForm(){

    return(
        <>
        <div className={styles.modal}>
        <form className={styles.form}>
      <input
        type="text"
        placeholder="Task Title"
        value=''
      />
      <textarea
        placeholder="Task Description"
        value=''
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
        </div>
    
        </>
    );
};