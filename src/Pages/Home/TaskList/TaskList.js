import React, { useEffect, useState } from "react";
import List from "./List/List";

const TaskList = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://task-app-eg.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  const newTodo = todo.filter(todo => todo.completeness!=='complete');
  return (
    <div className="container my-10 ml-auto mr-auto p-16">
      <h2 className="text-2xl font-bold text-center">To Do list</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full my-10">
          <thead>
            <tr>
              <th>Confirm Complete</th>
              <th>Task</th>
              <th>Completeness</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
                newTodo.map(todo => <List key={todo._id} list ={todo}></List>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
