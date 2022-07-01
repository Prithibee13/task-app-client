import React from "react";
import AddTask from "../AddTask/AddTask";
import TaskBar from "../TaskBar/TaskBar";

const Home = () => {
  return (
    <div>
      <AddTask></AddTask>
      <TaskBar></TaskBar>
    </div>
  );
};

export default Home;
