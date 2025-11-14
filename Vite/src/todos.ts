import type { Todo } from "./model";

export function createTodoItem(todo: Todo): HTMLDivElement {
  const itemEl = document.createElement('div');
  itemEl.className = "todos-item";
  itemEl.dataset.todoId = String(todo.id);
  
  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = todo.completed;

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;

  const buttonEl = document.createElement('button');
  buttonEl.innerText = '-';
  buttonEl.className = 'todos-delete';

  itemEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  return itemEl;
}
