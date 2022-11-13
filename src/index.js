import * as dom from './dom';
import Task from './Task';
import TodoList from './TodoList';
import * as storage from './storage';

import './layout.css';
import './header.css';
import './nav.css';
import './main.css';

dom.loadPage();

const todo = storage.readTodoList(7);
dom.loadTodoList(todo);

export function addNewTask(details, date, listId) {
  const newTask = new Task(details, storage.uniqeId(), listId, false, date);
  const todoList = storage.readTodoList(listId);

  todoList.addTask(newTask);
  storage.writeTodoList(todoList);

  dom.addTask(newTask);
}

export function deleteTask(id, listId) {
  storage.deleteTodoList(id);

  const todoList = storage.readTodoList(listId);
  todoList.removeTask(id);
  storage.writeTodoList(todoList);

  dom.removeTask(id);
}
