import { Task } from '../Task';
import { TasksForm } from "../TaskForm"
import styles from './TasksSection.module.css';

export function TasksSection(){
    return (<>
    <section className={styles.tasks}>
    <header>
        <p>5 tasks</p>
        <button type='button'>Add a new task</button>
        <p>clear completed</p>
      </header>

      <aside className={styles.category}>
        <h2>Categories</h2>
        <div className={styles.btn}>
            <span>Completed</span>
            <span>Urgent</span>
            <span>Important</span>
            <span>Later</span>
            <span>To study</span>
            <span>Add category</span>
        </div>  
      </aside>
       <div className={styles.list}>
          <Task />
          <Task />
          <Task />
          <Task />

      </div>
      <div>
      
      </div>
     
    </section>
      
    </>)
}
