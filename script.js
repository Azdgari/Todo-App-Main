const list = document.querySelector('[data-list]');
const createButtonElement = document.getElementById('submit-btn');
const newTodoForm = document.querySelector('[data-new-todo-form]');
const newTodo = document.getElementById('new-todo');
const submitForm = document.querySelector('[data-new-todo-input]');
const form = document.getElementById('create-new');

const todos = [];

function addNewTodo() {
  const inputValue = newTodo.value;
  if (inputValue === '') {
    return;
  }
  return (item = {
    id: todos.length + 1,
    name: newTodo.value,
  });
}

newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewTodo();
  todos.push(item);
  render();
  newTodo.value = '';
});

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function removeItem(id) {
  todos = todos.filter((item) => item.id !== id);
  render();
}

function render() {
  clearElement(list);
  todos.forEach((item) => {
    const listElement = document.createElement('li');
    listElement.dataset.id = item.id;
    listElement.classList.add('list-item');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = `task-${item.id}`;
    const label = document.createElement('label');
    label.htmlFor = `task-${item.id}`;
    label.classList.add('list-item-content');
    const span = document.createElement('span');
    span.classList.add('custom-checkbox');
    const removeBtn = document.createElement('button');
    removeBtn.id = `remove-${item.id}`;
    removeBtn.classList.add('remove-btn');
    const removeBtnImg = document.createElement('img');
    removeBtnImg.src = './images/icon-cross.svg';
    removeBtnImg.alt = 'remove item';
    removeBtn.appendChild(removeBtnImg);
    label.appendChild(span);
    label.innerHTML += item.name;
    list.appendChild(listElement);
    listElement.appendChild(checkBox);
    listElement.appendChild(label);
    listElement.appendChild(removeBtn);
  });
}

render();

//  function createNewTodo() {
//   const item = {
//     id: todos.length + 1,
//     text: '',
//     completed: false,
//   };

//   todos.unshift(item);

//   const { listItem, listItemContent } = createTodoElement(item);
// }

// function createTodoElement(item) {
//   const listItem = document.createElement('li');
//   const listItemContent = document.createElement('div');
//   listItemContent.type = 'text';
//   listItemContent.value = item.text;
//   const removeBtn = document.createElement('button');
//   const removeBtnImg = document.createElement('img');

//   listItem.classList.add('list-item');
//   listItemContent.classList.add('list-item-content');
//   removeBtn.classList.add('remove-btn');
//   removeBtnImg.classList.add('remove-btn-img');

//   listItemContent.textContent = item.text;
//   removeBtnImg.src = './images/icon-cross.svg';
//   removeBtnImg.alt = 'remove item';

//   listItem.appendChild(listItemContent);
//   removeBtn.appendChild(removeBtnImg);
//   listItem.appendChild(removeBtn);
//   list.appendChild(listItem);

//   newTodo.addEventListener('input', () => (item.text = newTodo.value));
// }

/* <div class="list-container">
      <ul class="list">
        <li class="list-item">
          <input type="checkbox">
          <div class="list-item-content">Item 1</div>
          <button id="remove-item"><img src="./images/icon-cross.svg" alt=""></button>
        </li> */
