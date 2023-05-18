import styles from './task.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { TbEdit } from 'react-icons/tb';

export function Task(){
    return(
        <>

<div className={styles.task}>
      <button className={styles.checkContainer}>
        <div></div>
            {/* <BsFillCheckCircleFill size={20} /> */}
      </button>
            <p>memorize the fifty state capitals</p>
            
      <button className={styles.deleteButton}>
         <TbEdit size={20} />
        <TbTrash size={20} /> 
      </button>
    </div>
         
        </>
    )
}