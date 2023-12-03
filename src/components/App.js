// App.js
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
