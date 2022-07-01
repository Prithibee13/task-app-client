import React from "react";

const List = (props) => {
  const { list } = props;
  const { task, completeness, _id } = list;
  let complete;
  if (completeness) {
    complete = "Completed";
  } else {
    complete = "Not Completed";
  }
  return (
    <tr>
      <td>
        {_id}
      </td>
      <td>{task}</td>
      <td>{complete}</td>
      <td>
        <button className="btn">Edit</button>
      </td>
    </tr>
  );
};

export default List;
