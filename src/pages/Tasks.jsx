import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  const toggleTask = (i) => {
    const newTasks = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <div style={{ marginBottom: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          style={{ padding: 8 }}
        />
        <button onClick={addTask} style={{ marginLeft: 10 }}>
          Add
        </button>
      </div>

      {tasks.map((task, i) => (
        <div key={i} style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#eee",
          padding: 10,
          marginBottom: 5
        }}>
          <span
            onClick={() => toggleTask(i)}
            style={{
              textDecoration: task.done ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(i)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;