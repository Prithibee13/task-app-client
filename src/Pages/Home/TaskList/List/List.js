import React, { useState } from "react";

const List = (props) => 
{
  const [taskState , setTaskState] = useState('')
  const { list } = props;
  const { task, completeness, _id } = list;
  let complete;

  if (completeness) {
    complete = "Completed";
  } else {
    complete = "Not Completed";
  }

  const handleRadioChange = (e) => 
  {
        setTaskState(e.target.value)
        sendTaskState(taskState , _id);
  };

  const sendTaskState = (state , id) =>
  {
    console.log(id);
    const doc ={
        completeness : state
    }

    fetch(`https://task-app-eg.herokuapp.com/state/${id}`, {
        method : 'PUT',
        headers : {
            'content-type' : "application/json"
        },
        body : JSON.stringify(doc)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  return (
    <tr>
      <td>
        <input
          type="radio"
          name="radio"
          class="radio radio-accent"
          onChange={handleRadioChange}
          value="complete"
        />
      </td>
      <td>{task}</td>
      <td>{complete}</td>
      <td>
        <button  className="btn">
          Edit
        </button>
      </td>
      
    </tr>
  );
};

export default List;
