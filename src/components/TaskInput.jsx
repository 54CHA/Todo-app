import React, { useState } from "react";

const TaskInput = () => {
  const [task, setTask] = useState("");

    console.log(task);
    function handleInputValue(event){
        setTask(event.target.value);
    }

  return (
    <form className="inputField">
      <input type="text" placeholder="Add Task" onChange={handleInputValue} />
      <button>+</button>
    </form>
  );
};

export default TaskInput;
