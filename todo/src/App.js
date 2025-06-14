import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return alert("Task cannot be empty");
    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  const removeTask = (id) =>
    setTasks(tasks.filter((t) => t.id !== id));

  const filteredTasks = tasks.filter((t) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? t.completed
      : !t.completed
  );

  const sortedTasks = [...filteredTasks].sort((a, b) =>
    sortAsc ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
  );

  return (
    <div className="app">
      <h1>📝 React To-Do List</h1>

      <div className="input-area">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setSortAsc(!sortAsc)}>
          Sort {sortAsc ? "↓" : "↑"}
        </button>
      </div>

      <ul>
        {sortedTasks.map((t) => (
          <li key={t.id} className={t.completed ? "done" : ""}>
            <span onClick={() => toggleTask(t.id)}>{t.text}</span>
            <button onClick={() => removeTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
