import React, { createContext, useState, useContext, ReactNode } from "react";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title, isCompleted: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

// export const useTaskContext = () => useContext(TaskContext);
