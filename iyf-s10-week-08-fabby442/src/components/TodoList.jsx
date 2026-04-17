import { useState } from "react";

function TodoList({ todos, addTodo, toggleTodo, deleteTodo, editTodo }) {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;

    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <h3>Todo List</h3>

      {/* ADD TODO */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />

                <button
                  onClick={() => {
                    editTodo(todo.id, editText);
                    setEditId(null);
                    setEditText("");
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  onClick={() => toggleTodo(todo.id)}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer"
                  }}
                >
                  {todo.text}
                </span>

                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                >
                  Edit
                </button>

                <button onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;