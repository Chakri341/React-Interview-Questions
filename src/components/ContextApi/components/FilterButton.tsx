import React from "react";
import { useFilterContext } from "../context/FilterContext";

type FilterType = "all" | "active" | "completed";

type FilterContextType = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

const FilterButtons: React.FC = () => {
  const { filter, setFilter } = useFilterContext() as FilterContextType;

  const buttonStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? "#1f74ba" : "#f1f1f1",
    color: isActive ? "#fff" : "#000",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    margin: "0 5px",
    fontSize: "14px",
    transition: "background-color 0.2s",
  });

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", margin: "20px 0" }}>
      <button
        onClick={() => setFilter("all")}
        disabled={filter === "all"}
        style={buttonStyle(filter === "all")}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        disabled={filter === "active"}
        style={buttonStyle(filter === "active")}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
        style={buttonStyle(filter === "completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;

