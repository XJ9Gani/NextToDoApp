import { todo } from "node:test";
import React from "react";
import { ToDo } from "../types/ToDo";
import { title } from "process";
const getToDos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = response.json();

  return data;
};

const AllToDoPage = async () => {
  const todos: ToDo[] = await getToDos();

  if (!todos) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <h1>All Products</h1>

      <ul className="border w-[80vw] h-[80vh] overflow-x-hidden overflow-y-auto mx-auto grid sm:grid-cols-1 lg:grid-cols-3 items-center">
        {todos.map(
          (el: ToDo) =>
            !el.completed && (
              <li key={el.id} className="border w-[300px] h-[200px] mx-auto">
                {el.title}
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default AllToDoPage;
