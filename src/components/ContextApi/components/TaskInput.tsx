import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

type TaskContextType = {
  addTask: (task: string) => void;
};

const TaskInput: React.FC = () => {
  const { addTask } = useTaskContext() as TaskContextType;
  const [value, setValue] = useState<string>("");

  const handleSubmit = () => {
    if (value.trim()) {
      addTask(value);
      setValue("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          padding: "10px",
          width: "60%",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
          marginRight: "10px",
        }}
        placeholder="Add a new task"
      />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#1f74ba",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1664a5")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1f74ba")}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;