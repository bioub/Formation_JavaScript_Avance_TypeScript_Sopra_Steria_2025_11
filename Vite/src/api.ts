import type { Todo } from "./model";

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  });
  const todos = await res.json();
  return todos.slice(0, 20);
}
  
// export function fetchTodos() {
//   return fetch("https://jsonplaceholder.typicode.com/todos", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((todos) => todos.slice(0, 20));
// }
