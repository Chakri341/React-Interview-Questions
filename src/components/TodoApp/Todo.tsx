import React, { useState, useEffect } from "react";

type Todo = {
  name: string;
  description: string;
  completed: boolean;
  priority: "High" | "Medium" | "Low";
  category: string;
};

type TodoAppProps = {};

const TodoApp: React.FC<TodoAppProps> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<Todo>({
    name: "",
    description: "",
    completed: false,
    priority: "Medium",
    category: "General",
  });
  const [error, setError] = useState<string>("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTodo.name.trim() || !newTodo.description.trim()) {
      setError("Both fields are required.");
      return;
    }

    if (isEditing !== null) {
      setTodos((prevTodos) =>
        prevTodos.map((todo, index) => (index === isEditing ? newTodo : todo))
      );
      setIsEditing(null);
    } else {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    setNewTodo({
      name: "",
      description: "",
      completed: false,
      priority: "Medium",
      category: "General",
    });
    setError("");
  };

  const handleDelete = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setIsEditing(index);
    setNewTodo(todos[index]);
  };

  const handleToggleCompleted = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Todo App</h1>
      </div>

      <div style={styles.formContainer}>
        <h2>{isEditing !== null ? "Edit Todo" : "Add a Todo"}</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            value={newTodo.name}
            onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
            style={styles.input}
          />

          <label htmlFor="description" style={styles.label}>
            Description
          </label>
          <input
            type="text"
            id="description"
            value={newTodo.description}
            onChange={(e) =>
              setNewTodo({ ...newTodo, description: e.target.value })
            }
            style={styles.input}
          />

          <label htmlFor="priority" style={styles.label}>
            Priority
          </label>
          <select
            id="priority"
            value={newTodo.priority}
            onChange={(e) =>
              setNewTodo({ ...newTodo, priority: e.target.value as Todo["priority"] })
            }
            style={styles.input}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <label htmlFor="category" style={styles.label}>
            Category
          </label>
          <input
            type="text"
            id="category"
            value={newTodo.category}
            onChange={(e) =>
              setNewTodo({ ...newTodo, category: e.target.value })
            }
            style={styles.input}
          />

          <button type="submit" style={styles.addButton}>
            {isEditing !== null ? "Update Todo" : "Add Todo"}
          </button>
        </form>
      </div>

      <div style={styles.listContainer}>
        <h2>Todo List</h2>
        <input
          type="text"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ ...styles.input, marginBottom: "10px" }}
        />
        {filteredTodos.length === 0 ? (
          <p style={styles.noTodos}>No todos available. Add some!</p>
        ) : (
          <ul style={styles.list}>
            {filteredTodos.map((todo, index) => (
              <li
                key={index}
                style={{
                  ...styles.listItem,
                  backgroundColor: "#1f74ba",
                }}
              >
                <div>
                {/* <h3 style={[styles.todoName, {textDecoration: isEditing ? "line-through" : "none"}]}>{todo.name}</h3> */}
                <h3 style={{ ...styles.todoName,  textDecoration: todo.completed ? "line-through" : "none" }}>{todo.name}</h3>
                <p style={styles.todoDescription}>{todo.description}</p>
                  <p style={{ color: "#fff" }}>Priority: {todo.priority}</p>
                  <p style={{ color: "#fff" }}>Category: {todo.category}</p>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleCompleted(index)}
                    style={{ marginRight: "15px",transform: "scale(2.5)" }}
                  />
                  <button
                    onClick={() => handleEdit(index)}
                    style={styles.editButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;


const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    backgroundColor: "#1f74ba",
    color: "#fff",
    padding: "10px 20px",
    textAlign: "center" as const,
    borderRadius: "8px",
  },
  title: {
    margin: 0,
  },
  formContainer: {
    margin: "20px 0",
    background: "#f9f9f9",
    padding: "10px",
    boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  addButton: {
    backgroundColor: "#1f74ba",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
  listContainer: {
    marginTop: "20px",
  },
  list: {
    listStyleType: "none" as const,
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    color: "#fff",
    boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  todoName: {
    fontSize: "18px",
    margin: "0 0 5px 0",
  },
  todoDescription: {
    margin: 0,
  },
  editButton: {
    backgroundColor: "#ffa500",
    color: "#fff",
    border: "none",
    padding: "8px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    marginRight: "5px",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "8px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
  noTodos: {
    textAlign: "center" as const,
    color: "#666",
    marginTop: "10px",
  },
  taskDone : {
    textDecoration:"line-through"
  }
};

// import React, { useState } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState('');

//   const addTodo = () => {
//     if (text) {
//       setTodos([...todos, { text, completed: false }]);
//       setText('');
//     }
//   };

//   const toggleTodo = (index :number )=> {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   };

//   const removeTodo = (index :number )=> {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a to-do" />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//             {todo.text}
//             <button onClick={() => toggleTodo(index)}>Toggle</button>
//             <button onClick={() => removeTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
