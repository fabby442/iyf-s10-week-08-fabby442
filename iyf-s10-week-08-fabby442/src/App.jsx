import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Projects", completed: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <Header />

      <main>
        <h2>Todo App (Lifted State)</h2>

        <TodoList
          todos={todos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;