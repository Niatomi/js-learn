import React from "react";
import ToDoList from "./ToDo/ToDoList";

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Order bread" },
    { id: 2, completed: false, title: "Order oil" },
    { id: 3, completed: false, title: "Order orange " },
    { id: 4, completed: false, title: "Order something " },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <div className="wrapper">
      <h1>React Learn</h1>
      <ToDoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
