import React, { useEffect, useState } from 'react';
import TodoList from './TodoList/TodoList';

const ToDo = () => 
{
    const [todo , setTodo] = useState([])

    useEffect(()=>{
        fetch('https://task-app-eg.herokuapp.com/tasks')
        .then(res => res.json())
        .then(data => setTodo(data))}, []) 
    return (
        <div className="container p-16 my-10 ml-auto mr-auto">
            <h2 className="text-2xl font-bold text-center">To Do</h2>
            <article className='my-16 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    todo.map(todo => <TodoList key={todo._id} list = {todo}></TodoList>)
                }
            </article>
        </div>
    );
};

export default ToDo;