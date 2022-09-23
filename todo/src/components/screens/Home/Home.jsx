import React, { useState } from "react";
import { CreateTodo } from "./create-todo/CreateTodo";
import { TodoItem } from "./item/TodoItem";

const data = [
  {
    _id: "esfes223",
    title: "Finish the essay",
    isCompleted: false,
  },
  {
    _id: "esfes2dfd23",
    title: "read next chapter",
    isCompleted: false,
  },
  {
    _id: "esddsfes223",
    title: "Finish the essay",
    isCompleted: false,
  },
];

export const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = id => setTodos([...todos].filter(t => t._id !== id));


  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">TODO</h1>
      {todos.map( todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodo setTodos={setTodos}/>
    </div>
  );
};
