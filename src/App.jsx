// import { TasksForm } from "./components/TaskForm"
import { useState } from "react";
import { TasksSection } from "./components/TasksSection"
import sunIcon from './assets/sun.svg'
import moonIcon from './assets/moon.svg'
import './styles/global.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? "dark" : "light";
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='theme'>
    <div >
    <h1 className="title">Personal Task Manager</h1>
   
  
      <TasksSection/>
    </div>
      
     
    </div>
  )
}

export default App
