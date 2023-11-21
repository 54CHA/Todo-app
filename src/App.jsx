import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName){
    setToDoList(toDoList.filter((task)=> task.taskName !== deleteTaskName));
  }

  console.log(toDoList);

  return (
    <>
      <div className="container">
        <h1>Task Master</h1>

        <TaskInput addTask={addTask} />

        <div className="toDoList"></div>
        <span>To do</span>
        <ul className="list-items">
          {toDoList.map((task, key) => (
            <TaskItem task={task} key={key} deleteTask={deleteTask}/>
          ))}
        </ul>

        {toDoList.length ===0? <p className="notify">No tasks at the moment</p> : null}
      </div>
    </>
  );
}

export default App;
