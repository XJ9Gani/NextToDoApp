import { ToDo } from "../types/ToDo";

const getToDos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = response.json();

  return data;
};

const DoneToDoPage = async () => {
  const todos: ToDo[] = await getToDos();

  return (
    <>
      <h1>Done ToDos</h1>
      <ul className="border w-[80vw] h-[80vh] overflow-x-hidden overflow-y-auto mx-auto grid sm:grid-cols-1 lg:grid-cols-3 items-center">
        {todos.map(
          (el: ToDo) =>
            el.completed && (
              <li key={el.id} className="border w-[300px] h-[200px] mx-auto">
                {el.title}
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default DoneToDoPage;
