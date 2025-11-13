/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLDivElement}
 */
export function createTodoItem(todo) {
  /*
  <div class="todos-item" data-todo-id="0.353454634">
    <input type="checkbox" checked>
    <span>ABC</span>
    <button>-</button>
  </div>
  */

  /*
  Exercice 1
  Compléter cette fonction de sorte à :
  - créer la checkbox (doit être coché si todo.completed === true)
  - créer le bouton <button>-</button>
  */

  /*
  Exercice 2
  Au clic du bouton <button>-</button>
  Supprimer balise <div class="todos-item"> correspondante
  */

  const itemEl = document.createElement('div');
  itemEl.className = "todos-item";
  itemEl.dataset.todoId = todo.id;

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = todo.completed;

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;

  const buttonEl = document.createElement('button');
  buttonEl.innerText = '-';
  buttonEl.className = 'todos-delete';

  /*
  Exercice 4
  En s'inspirant de 03-events/propagation.html
  Retirer le code suivant : buttonEl.addEventListener(...)
  Ecouter le click de listEl dans main.js
  Avec event.target tester si le click a été fait sur un bouton -
  Si oui supprimer l'élément parent
  */
  // buttonEl.addEventListener('click', () => {
  //   itemEl.remove();
  // });

  itemEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  return itemEl;
}

// pile d'appel
// ^
// |
// |
// |                                                       lg
// |createTodoItem - createTodoItem                        taskClick2
// +-------------------------------------------------------(clic)----> temps
//
