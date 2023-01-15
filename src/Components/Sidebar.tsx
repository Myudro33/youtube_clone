import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/contstants";

interface SidebarProps {
  setselectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
}

const Sidebar = ({ setselectedCategory, selectedCategory }: SidebarProps) => {
  
  
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setselectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory ? "#fc1503" : "",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.5",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
