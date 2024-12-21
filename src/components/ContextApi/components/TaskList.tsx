import React from "react";
import { useTaskContext } from "../context/TaskContext";
import { useFilterContext } from "../context/FilterContext";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type TaskContextType = {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

type FilterType = "all" | "active" | "completed";

type FilterContextType = {
  filter: FilterType;
};

const TaskList: React.FC = () => {
  const { tasks, toggleTask, deleteTask } = useTaskContext() as TaskContextType;
  const { filter } = useFilterContext() as FilterContextType;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;
    return false; // To satisfy TypeScript for exhaustive checks
  });

  return (
    <ul style={{
      margin: "20px auto",
      padding: 0,
      maxWidth: "500px",
      listStyle: "none",
    }}>
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
            backgroundColor: "#1f74ba",
            padding: "15px 20px",
            borderRadius: "8px",
            margin: "10px 0",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <span
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none",
              cursor: "pointer",
              flex: 1,
              marginRight: "15px",
            }}
            onClick={() => toggleTask(task.id)}
          >
            {task.title}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            style={{
              backgroundColor: "#e63946",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d62839")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e63946")}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;