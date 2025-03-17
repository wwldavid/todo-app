import React from "react";

const TaskDetail = ({ tasks, onDeleteTask }) => {
  if(!tasks || tasks.length === 0) return <p> No tasks selected. </p>
  return (
    <div
      style={{ border: "2px solid #b88884", padding: "10px", marginTop: "20px" }}
    >
      <h2>Task Details</h2>
      <div style={{display:"grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "10px",}}>
        {tasks.map((task)=> (
        <div key={task.id} style={{ 
          border: "1px solid #b88884",
          padding: "10px",
          margin: "5px",
          cursor: "pointer",
        }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>
             <strong>Status:</strong>{task.status}
          </p>
          <button onClick={() => onDeleteTask(task)}>delete task</button>
        </div>
      ))}
      </div>
      
    </div>
  );
};
export default TaskDetail;
