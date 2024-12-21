import React from "react";
import { TaskProvider } from "./context/TaskContext";
import { FilterProvider } from "./context/FilterContext";
import TaskInput from "./components/TaskInput";
import FilterButtons from "./components/FilterButton";
import TaskList from "./components/TaskList";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
    <div style={{backgroundColor: "#1f74ba",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px 5px 0 0",
  }}>
    <h1 style={{ textAlign:'center' }}>Task Manager</h1>
  </div>
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <TaskProvider>
        <FilterProvider>
          <TaskInput />
          <FilterButtons />
          <TaskList />
        </FilterProvider>
      </TaskProvider>
    </div>
    </>
  );
};
export default App;
