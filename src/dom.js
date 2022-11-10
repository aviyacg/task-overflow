import { getIdList, readTodoList } from './storage';

// main content functions
export function addTask(task) {
  const TASK = document.createElement('div');
  TASK.classList.add('task');
  TASK.dataset.taskId = task.id;

  // checkbox
  const CHECKBOX = document.createElement('div');
  CHECKBOX.classList.add('checkbox');
  TASK.appendChild(CHECKBOX);
  // details
  const DETAILS = document.createElement('div');
  DETAILS.textContent = task.details;
  TASK.appendChild(DETAILS);
  // dueDate
  const DATE = document.createElement('div');
  DATE.classList.add('date');
  DATE.textContent = task.dueDate;
  TASK.appendChild(DATE);
  // edit button
  const EDIT = document.createElement('button');
  EDIT.classList.add('edit');
  TASK.appendChild(EDIT);
  // delete button
  const DELETE = document.createElement('button');
  DELETE.classList.add('delete');
  TASK.appendChild(DELETE);
  // insert task before new task button
  const MAIN = document.querySelector('.main');
  const NEW_TASK_BUTTON = document.querySelector('.new-task-button');
  MAIN.insertBefore(TASK, NEW_TASK_BUTTON);
}

export function removeTask(id) {
  const task = document.querySelector(`data-id="${id}"`);
  if (task) {
    task.remove();
    return true;
  }
  return false;
}

export function loadTodoList(todoList) {
  const MAIN = document.querySelector('.main');
  // add title div
  const TITLE = document.createElement('div');
  TITLE.classList.add('title');
  TITLE.textContent = todoList.title;
  TITLE.dataset.todoListId = todoList.id;
  MAIN.appendChild(TITLE);
  // add all tasks divs
  todoList.taskList.forEach((task) => { addTask(task); });
  // add task button
  const ADD_TASK_BUTTON = document.createElement('button');
  ADD_TASK_BUTTON.classList.add('add-task-button');
  ADD_TASK_BUTTON.textContent = 'Add Task';
  MAIN.appendChild(ADD_TASK_BUTTON);
}

// nav content functions
export function addTodoList(todoList) {
  const LIST_BUTTON = document.createElement('div');
  LIST_BUTTON.classList.add('list-button');
  LIST_BUTTON.textContent = todoList.title;
  LIST_BUTTON.dataset.id = todoList.id;

  // append button before new list button
  const NAV = document.querySelector('.nav');
  const NEW_LIST_BUTTON = document.querySelector('.new-list-button');
  NAV.insertBefore(LIST_BUTTON, NEW_LIST_BUTTON);
}

export function removeTodoList(id) {
  const todoList = document.querySelector(`data-id="${id}"`);
  if (todoList) {
    todoList.remove();
    return true;
  }
  return false;
}
// general dom functions
export function loadPage() {
  // layout divs
  const HEADER = document.createElement('div');
  HEADER.classList.add('header');
  HEADER.textContent = 'Task Overflow';
  document.body.appendChild(HEADER);

  const NAV = document.createElement('div');
  NAV.classList.add('nav');
  document.body.appendChild(NAV);

  const MAIN = document.createElement('div');
  MAIN.classList.add('main');
  document.body.appendChild(MAIN);

  // nav content
  // add new todolist button
  const NEW_LIST_BUTTON = document.createElement('button');
  NEW_LIST_BUTTON.classList.add('new-list-button');
  NEW_LIST_BUTTON.textContent = 'create new list';
  NAV.appendChild(NEW_LIST_BUTTON);
  // load todoLists ids from storage
  const idList = getIdList();
  // add all todoList buttons to nav
  idList.forEach((id) => {
    const todoList = readTodoList(id);
    addTodoList(todoList);
  });
}
