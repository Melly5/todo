import React from "react";
import { Check } from "./Check";

export const TodoItem = ({ todo }) => {
  return (
    <button className="flex items-center mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      <Check/>
      {todo.title}
    </button>
  );
};

