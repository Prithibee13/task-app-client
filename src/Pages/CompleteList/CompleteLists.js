import React, { useEffect, useState } from 'react';
import CompleteList from './CompleteList/CompleteList';

const CompleteLists = () => {
    
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://task-app-eg.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  const newTodo = todo.filter(todo => todo.completeness ==='complete');
    return (
        <div className='my-10 container ml-auto mr-auto p-16'>
           <h2 className='text-2xl font-bold text-center'>Completed Task</h2>

           <div class="overflow-x-auto">
        <table class="table table-zebra w-full my-10">
          <thead>
            <tr>
                <th>Id</th>
                <th>Task</th>
             
            </tr>
          </thead>
          <tbody>
            {
                newTodo.map(todo => <CompleteList key={todo._id} list ={todo}></CompleteList>)
            }
          </tbody>
        </table>
      </div>

        </div>
    );
};

export default CompleteLists;