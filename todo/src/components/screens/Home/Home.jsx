import React, { useState } from "react";
import { TodoItem } from "./item/TodoItem";

const data = [
  {
    _id: 'esfes223',
    title: 'Finish the essay',
    isCompleted: false,
  },
  {
    _id: 'esfes2dfd23',
    title: 'read next chapter',
    isCompleted: false,
  },
  {
    _id: 'esddsfes223',
    title: 'Finish the essay',
    isCompleted: false,
  },
];

export const Home = () => {

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">TODO</h1>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo}/>
      ))}
    </div>
  );
};

