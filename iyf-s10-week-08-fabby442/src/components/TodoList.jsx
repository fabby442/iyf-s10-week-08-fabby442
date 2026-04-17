import { useState } from "react";

function TodoList({ todos, addTodo, toggleTodo, deleteTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;

    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <h3>Todo List</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;