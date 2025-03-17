import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";

const TaskBoard = () => {
  const tasks = [
    {
      id: 1,
      title: "Learn React",
      description: "Complete the React tutorial",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Build Task App",
      description: "Implement props and props drilling",
      status: "To Do",
    },
  ];

  const [selectedTasks, setSelectedTasks] = useState([ ]);
  const handleSelectTask = (task) => {
    setSelectedTasks((prevTasks) => {
      if (prevTasks.find((t) => t.id === task.id)) return prevTasks;
      return [...prevTasks, task]
    })
  }
  const handleDeleteTask = (taskToDelete) => {
    setSelectedTasks((prevTasks) =>
    prevTasks.filter((task) => task.id !== taskToDelete.id))
  }

  return (
    <div>
      <h1>Task Board</h1>
      <TaskList tasks={tasks} onSelectTask={handleSelectTask}  />
      {selectedTasks.length > 0 && (
        <TaskDetail tasks={selectedTasks} onDeleteTask={handleDeleteTask} />
      )}
    </div>
  );
};

export default TaskBoard;
