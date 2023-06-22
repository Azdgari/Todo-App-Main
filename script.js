const list = document.querySelector('[data-list]');
const createButtonElement = document.getElementById('submit-btn');
const newTodoForm = document.querySelector('[data-new-todo-form]');
const newTodo = document.getElementById('new-todo');
const submitForm = document.querySelector('[data-new-todo-input]');
const form = document.getElementById('create-new');
const taskCount = document.querySelector('[data-tasks-count]');

let LOCAL_STORAGE_KEY = 'todo.listItems';
let listItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

function save() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listItems));
}

function saveAndRender() {
  save();
  render();
}

function renderTaskCount() {
  const count = listItems.filter((item) => !item.checked).length;
  taskCount.textContent = `${count} items left`;
}

function addNewTodo() {
  const inputValue = newTodo.value;
  if (inputValue === '') {
    return;
  }
  const item = {
    id: listItems.length + 1,
    name: newTodo.value,
    checked: false,
  };
  listItems.push(item);
  newTodo.value = '';
  saveAndRender();
}

newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewTodo();
});

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function toggleCheckBox(id) {
  const item = listItems.find((item) => item.id === id);
  if (item) {
    item.checked = !item.checked;
    save();
  }
  renderTaskCount();
}

function removeItem(id) {
  listItems = listItems.filter((item) => item.id !== id);
  renderTaskCount();
  saveAndRender();
}

function render() {
  clearElement(list);
  listItems.forEach((item) => {
    const listElement = document.createElement('li');
    listElement.dataset.id = item.id;
    listElement.classList.add('list-item');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = `task-${item.id}`;
    checkBox.checked = item.checked;
    checkBox.addEventListener('click', () => toggleCheckBox(item.id));
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
    renderTaskCount();
  });
}

render();
