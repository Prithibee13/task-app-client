import React, { useState } from "react";

const AddTask = () => 
{
  const [task, setTask] = useState("");

  const handleKeyPress = (e) => 
  {
    if (e.key === "Enter") 
    {
      e.preventDefault();
      sendTask(task);        
    }
  }

  const sendTask = (task) =>
  {
      const item = {
        task : task
      }
      const url = 'https://task-app-eg.herokuapp.com/addTask'

      fetch( url , {
        method : "POST",
        headers :
        {
          'content-type' : "application/json"
        },
        body : JSON.stringify(item)
      }).then(res => res.json())
      .then(data => console.log(data))
  }

  

  const handleTask = (e) => {
    const newTask = e.target.value;
    setTask(newTask);
  }
  
  return (
    <div className="container p-16 ">
      <div class="card w-96 p-10 shadow-xl mx-auto">
        <h2>Add your New Task</h2>
        <div class="card-body items-center text-center">
          <form onKeyDown={handleKeyPress}>
            <input
              onChange={handleTask}
              value={task}
              type="text"
              name="task"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
