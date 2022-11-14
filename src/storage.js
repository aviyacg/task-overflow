import TodoList from './TodoList';
import Task from './Task';

// create uniqeId variable in local storage if not exist
if (!localStorage.getItem('uniqeId')) {
  localStorage.setItem('uniqeId', 1);
}

// return a uniqe integer
export function uniqeId() {
  const id = parseInt(localStorage.getItem('uniqeId'));
  localStorage.setItem('uniqeId', id + 1);
  return id;
}

export function readTodoList(id) {
  // check if TodoList exist
  let rawTodoList = localStorage.getItem(id);
  if (!rawTodoList) { return false; }

  // parse the raw todoList to a TodoList Object
  rawTodoList = JSON.parse(rawTodoList);
  const todoList = new TodoList(rawTodoList.title, id);
  // add tasks to the todoList
  rawTodoList.taskIdList.forEach((taskId) => {
    let rawTask = localStorage.getItem(taskId);
    if (rawTask) {
      rawTask = JSON.parse(rawTask);
      const task = new Task(
        rawTask.details,
        rawTask.id,
        rawTask.listId,
        rawTask.done,
        rawTask.dueDate,
      );
      todoList.addTask(task);
    }
  });

  return todoList;
}

function readTask(id) {
  let rawTask = localStorage.getItem(id);
  if (!rawTask) { return false; }
  rawTask = JSON.parse(rawTask);
  const task = new Task(
    rawTask.details,
    id,
    rawTask.listId,
    rawTask.done,
    rawTask.dueDate,
  );

  return task;
}

function writeTask(task) {
  localStorage.setItem(task.id, JSON.stringify(task));
}

if (!localStorage.getItem('idList')) {
  localStorage.setItem('idList', JSON.stringify([]));
}

function addToIdList(id) {
  const idList = JSON.parse(localStorage.getItem('idList'));
  if (idList instanceof Array && !idList.includes(id)) {
    idList.push(id);
    localStorage.setItem('idList', JSON.stringify(idList));
  }
}

function removeFromIdList(id) {
  const idList = JSON.parse(localStorage.getItem('idList'));
  if (idList instanceof Array && !idList.includes(id)) {
    const index = idList.findIndex((currentId) => currentId === id);
    if (index !== -1) { idList.splice(index, 1); }
    localStorage.setItem('idList', JSON.stringify(idList));
  }
}

export function getIdList() {
  const idList = localStorage.getItem('idList');
  return JSON.parse(idList);
}

export function writeTodoList(todoList) {
  // write all tasks to local storage
  todoList.taskList.forEach((task) => {
    localStorage.setItem(task.id, JSON.stringify(task));
  });

  // convert each task in task list to it's id
  const taskIdList = todoList.taskList.map((task) => task.id);

  // create a raw todoList and write it to local storage
  const rawTodoList = {
    title: todoList.title,
    taskIdList,
  };
  // write rawTodoList to local storage
  localStorage.setItem(todoList.id, JSON.stringify(rawTodoList));
  // write id to idList
  addToIdList(todoList.id);
}

export function deleteItem(id) {
  localStorage.removeItem(id);
  removeFromIdList(id);
}

export function addNewTask(details, date, listId) {
  const todoList = readTodoList(listId);
  if (!todoList) { return false; }

  const newTask = new Task(details, uniqeId(), listId, false, date);
  todoList.addTask(newTask);
  writeTodoList(todoList);
  return newTask;
}

export function removeTask(id) {
  const task = readTask(id);
  if (!task) { return false; }

  const todoList = readTodoList(task.listId);
  if (!todoList) { return false; }
  todoList.removeTask(id);
  writeTodoList(todoList);
  deleteItem(id);
  return true;
}

export function toggleTask(id) {
  const task = readTask(id);
  if (task) {
    task.toggleDone();
    writeTask(task);
  }
}

export function addNewTodoList(title) {
  const newList = new TodoList(title, uniqeId());
  writeTodoList(newList);
  return newList;
}
