import React, { useState } from "react";
/*  */

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
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div class="card w-96 p-10 shadow-xl ">
        <h2 className="text-xl font-bold text-center">Add your New Task</h2>
        
        <div class="card-body items-center my-auto text-center">
          <form onKeyDown={handleKeyPress}>
            <input
              onChange={handleTask}
              value={task}
              type="text"
              name="task"
              placeholder="Type here"
              class="input input-bordered w-full mx-auto max-w-xs"
            />
          </form>
        </div>
      </div>

      <div>
        <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFza3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>    
    </article>
      
    </div>
  );
};

export default AddTask;
