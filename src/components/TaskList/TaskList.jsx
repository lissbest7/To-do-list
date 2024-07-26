import Task from "./Task";
import "./TaskList.scss";
import clipBoard from "../../assets/Clipboard.png";

function TaskList({ todos, onDeleteTodo, onToggleCompletion, onFilterChange, activeCount, completedCount }) {
  return (
    <div className="task-list container">
      <div className="task-list-top">
        <h1 
          className="t-left"
          onClick={() => onFilterChange("active")}
          style={{ cursor: 'pointer' }}
        >
          Current Tasks ({activeCount})
        </h1>
        <h1 
          className="t-right"
          onClick={() => onFilterChange("completed")}
          style={{ cursor: 'pointer' }}
        >
          Completed ({completedCount})
        </h1>
      </div>
      {todos.length > 0 ? (
        <div className="task-list-items">
          {todos.map((todo) => (
            <Task
              key={todo.id}
              text={todo.title}
              isCompleted={todo.isCompleted}
              onDelete={() => onDeleteTodo(todo.id)}
              onToggleCompletion={() => onToggleCompletion(todo.id)}
            />
          ))}
        </div>
      ) : (
        <div className="task-list-items task-list-items-empty">
          <img src={clipBoard} alt="Clipboard" />
          <p>
            The ToDo list is empty. Please add tasks to be done and organize your life with todo.
          </p>
        </div>
      )}
    </div>
  );
}

export default TaskList;
