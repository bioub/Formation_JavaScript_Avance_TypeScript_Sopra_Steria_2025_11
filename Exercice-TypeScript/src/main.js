import { fetchTodos } from './api.js';
import { createTodoItem } from './todos.js';

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todos-form-input');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todos-list');

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todos-form-toggle');

formEl.addEventListener('submit', (event) => {
  // preventDefault empêche l'action par défaut
  // qui est d'aller vers la destination du form
  // (attribut action) ou recharger la page
  // si pas d'action
  event.preventDefault();

  const value = inputEl.value;

  // import('./todos.js').then(({ createTodoItem }) => {
    const itemEl = createTodoItem({
      id: Math.random(),
      title: value,
      completed: false
    });
  
    listEl.append(itemEl);
  
    inputEl.value = '';
  // })
});

/*
Exercice 3
Dans le formulaire ajouter une balise
<input type="checkbox" class="todos-form-toggle">
au début du formulaire

Au clic de celle-ci, cocher ou décocher toutes les
checkbox de la liste
*/
toggleEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = listEl.querySelectorAll('input[type="checkbox"]');

  for (const checkbox of checkboxes) {
    checkbox.checked = toggleEl.checked;
  }
});

listEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todos-delete')) {
    target.closest('.todos-item').remove();
  }
});


fetchTodos().then((todos) => {
  for (const todo of todos) {
    const itemEl = createTodoItem(todo);
    listEl.append(itemEl);
  }
})


inputEl.addEventListener('input', () => {
  localStorage.setItem('todo-input', inputEl.value);
});

const previousTodoInput = localStorage.getItem('todo-input');

if (previousTodoInput) {
  inputEl.value = previousTodoInput;
}
