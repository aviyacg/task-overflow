import * as dom from './dom';
import Task from './Task';
import TodoList from './TodoList';
import * as storage from './storage';

import './layout.css';
import './header.css';
import './nav.css';

dom.loadPage();

const todo = storage.readTodoList(7);
dom.loadTodoList(todo);
