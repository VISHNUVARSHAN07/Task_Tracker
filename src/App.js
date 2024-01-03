import { Route, BrowserRouter as Router } from "react-router-dom";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

const App = () => {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  
  //Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000)+1

    const newTask= {id,...task}
    setTasks([...tasks,newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    // console.log("delete",id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Remainder
const toggleReminder =(id) => {
  setTasks(tasks.map((task)=>task.id ===id ? {...task,reminder: !task.reminder}: task))
}
  return (
    <Router>

    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask&& <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
          {deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to show'
      )}
 
      <Footer/>
    </div>
    </Router>
  );
  
}

export default App;
