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
    <div className={`app ${theme}`}>
      <div className="icon" onClick={toggleTheme}>
      {isDarkMode ?  <img src={sunIcon} alt="icon of a sun"/> :  <img src={moonIcon} alt="icon of a moon"  />}
    </div>
    <div >
    <h1 className="title">Personal Task Manager</h1>

     
      <TasksSection/>
    </div>
      
     
    </div>
  )
}

export default App
