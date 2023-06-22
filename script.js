const list = document.querySelector('[data-list]');
const createButtonElement = document.getElementById('submit-btn');
const newTodoForm = document.querySelector('[data-new-todo-form]');
const newTodo = document.getElementById('new-todo');
const submitForm = document.querySelector('[data-new-todo-input]');
const form = document.getElementById('create-new');

let LOCAL_STORAGE_KEY = 'todo.listItems';
let listItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

function save() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listItems));
}

function saveAndRender() {
  save();
  render();
}

let todos = [];

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
  saveAndRender();
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
    removeBtn.addEventListener('click', () => removeItem(item.id));
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
