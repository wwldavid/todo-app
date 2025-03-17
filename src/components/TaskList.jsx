import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onSelectTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      <div style={{
        display:"grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "10px",
      }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onSelectTask={onSelectTask} />
      ))}
      </div>
    </div>
  );
};
export default TaskList;
