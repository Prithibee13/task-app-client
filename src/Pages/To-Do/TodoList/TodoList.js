import React from "react";

const TodoList = (props) => 
{
    const { list } = props;
    const { task, completeness } = list;
    let complete
    if(completeness)
    {
        complete = 'Completed'
    }
    else
    {
        complete = 'Not Completed'
    }
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Task Name : {task}</h2>
          <p className="text-xl ">State : {complete}</p>
          <div class="card-actions justify-center my-5">
            <button class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
