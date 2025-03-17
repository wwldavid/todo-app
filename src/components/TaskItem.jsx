import React from "react";

const TaskItem = ({ task, onSelectTask }) => {
  return (
    <div
      style={{ 
        border: "1px solid #b88884",
        padding: "10px",
        margin: "5px",
        cursor: "pointer",
      }}
    >
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <button onClick={() => onSelectTask(task)}>select task</button>
    </div>
  );
};
export default TaskItem;
