import React, { createContext, useState, useContext, ReactNode } from "react";

type FilterType = "all" | "active" | "completed";

type FilterContextType = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
