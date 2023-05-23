import { useEffect, useState } from 'react';
import { Task } from '../Task';
import { TasksForm } from "../TaskForm"
import { EditForm } from '../EditForm';
import styles from './taskssection.module.css';
import { CgAdd } from 'react-icons/cg';

export function TasksSection(){
  const [formOpen, setFormOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all')
  const [isEditing, setIsEditing] = useState(false);
  

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const openForm = () =>{
    setFormOpen(true)
  };

  const closeForm = () =>{
    setFormOpen(false);
  };

  
  const openEdit= (id) =>{
    setOpenEditForm(true);
    setIsEditing(true);
  }

  const closeEdit= () =>{
    setOpenEditForm(false);
  }
 

  const addTask = (title, description)=> {
      setTasks([...tasks,
        {
          id:crypto.randomUUID(),
          title:title,
          description:description,
          completed:false,
        }
      ])
  };
   const taskNumber = tasks.length;

   const toggleCompleted = id => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedTitle, updatedDescription) => {
    setTasks(tasks =>
      tasks.map(task => {
        if (task.id === id) {
          return { title: updatedTitle, description: updatedDescription, isEditing: task.isEditing };
        }
        return task;
      })
    );
  
  };

  const filteredTasks = filter === 'completed'
    ? tasks.filter(task => task.completed)
    : filter === 'not-completed'
    ? tasks.filter(task => !task.completed)
    : tasks;

    return (<>
    <section className={styles.tasks}>
    <header>
        <p>{taskNumber} tasks</p> 
        <div className={styles.selectTag}>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not-completed">Not Completed</option>
        </select>
        </div>
       
       
        <CgAdd size={30} onClick={openForm }/>
       
      </header>

  
       <div className={styles.list}>

      {filteredTasks.map(task => (
         <Task key={task.id} task={task} onComplete={toggleCompleted} onDelete={deleteTask} onEdit={openEdit}/>
      
      ))}
        
      </div>
      <div>
      
      </div>
    </section>

    {formOpen && <TasksForm onClose={closeForm} onAddTask={addTask} />}

    
    {
    tasks.map(task=>(
      openEditForm && <EditForm
          onClose={closeEdit}
          onEditTask={editTask} task={task} key={task.id}/>
    ))
    }
      
    </>)
}
