import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Hooks"
    },
    {
      text: "Belajar State"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Hooks"
    },
    {
      text: "Belajar State"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
