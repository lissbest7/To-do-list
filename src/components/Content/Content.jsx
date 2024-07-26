import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import TaskList from "../TaskList/TaskList";
import "./Content.scss";

function Content() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("active"); 

  function addTodo(value) {
    setTodos((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1000),
        title: value,
        isCompleted: false,
      },
    ]);
  }

  function deleteTodo(id) {
    setTodos((prevState) => prevState.filter(todo => todo.id !== id));
  }

  function toggleCompletion(id) {
    setTodos((prevState) =>
      prevState.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.isCompleted;
    if (filter === "active") return !todo.isCompleted;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.isCompleted).length;
  const completedCount = todos.filter(todo => todo.isCompleted).length;

  return (
    <div className="content">
      <InputForm handleAddTodo={addTodo} />
      <TaskList
        todos={filteredTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompletion={toggleCompletion}
        onFilterChange={setFilter}
        activeCount={activeCount}
        completedCount={completedCount}
      />
    </div>
  );
}

export default Content;
