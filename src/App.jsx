import TaskInput from "./components/TaskInput";

function App() {
  return (
    <>
      <div className="container">
        <h1>Task Master</h1>

        <TaskInput />

        <div className="toDoList"></div>
        <span>To do</span>
        <ul className="list-items">
          
        </ul>
      </div>
    </>
  );
}

export default App;
