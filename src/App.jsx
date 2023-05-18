import { TasksForm } from "./components/TaskForm"
import { TasksSection } from "./components/TasksSection"

function App() {
  return (
    <>
      <h1 className="title">Personal <div>Task Manager</div></h1>
   
      <TasksSection/>
      <TasksForm/>
    </>
  )
}

export default App
