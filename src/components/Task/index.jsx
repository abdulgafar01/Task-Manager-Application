import styles from './task.module.css'
import { BsCheckCircle } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { TbEdit } from 'react-icons/tb';

export function Task({task, onComplete, onDelete, onEdit}){
    return(
        <>

<div className={styles.task}>
      <button className={styles.checkContainer} onClick={()=> onComplete(task.id)}>
        
            {task.completed ?  <BsCheckCircle className={styles.click} size={20} /> : <div></div> }
      </button>

      <div className={styles.content}>
        <div className={styles.title}>
          <h3>
          {
             task.title 
            
            }
           
          </h3>
           
        </div>
        <div className= {styles.description}>
       <p>
       {task.description}
       </p>
        
      
        </div>
        
      </div>
            
            
      <button className={styles.editButton} onClick={()=> onEdit()}>
      <TbEdit size={20} />
      </button>     
      <button className={styles.deleteButton} onClick={()=> onDelete(task.id)}> 
        <TbTrash size={20} /> 
      </button>
    </div>
         
        </>
    )
}