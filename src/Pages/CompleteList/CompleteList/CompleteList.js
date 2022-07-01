import React from "react";

const CompleteList = (props) => {
    const { list } = props;
    const{task , _id} = list
  return (
    <tr>
        <td>{_id}</td>
      <td>{task}</td>
    </tr>
  );
};

export default CompleteList;
