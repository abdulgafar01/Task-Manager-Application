import styles from './TasksSection.module.css';

export function TasksSection(){
    return (<>
    <section>
    <header>
        <p>5 tasks</p>
        <button type='button'>Add a new task</button>
        <p>clear completed</p>
      </header>

      <aside>
        <h2>Categories</h2>
        <div>
        <button>Completed</button>
        <button>Urgent</button>
        <button>Important</button>
        <button>Later</button>
        <button>To study</button>
        </div>
        <button>Add category</button>
      </aside>

    </section>
      
    </>)
}
