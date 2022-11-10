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
  let rawTodoList = localStorage.getItem(id);
  if (!rawTodoList) { return false; }

  rawTodoList = JSON.parse(rawTodoList);
  const todoList = new TodoList(rawTodoList.title, id);
  rawTodoList.taskList.forEach((taskId) => {
    let rawTask = localStorage.getItem(taskId);
    if (rawTask) {
      rawTask = JSON.parse(rawTask);
      const task = new Task(...rawTask);
      todoList.addTask(task);
    }
  });

  return todoList;
}

export function writeProject(project) {
  // write all tasks to local storage
  project.taskList.forEach((task) => {
    localStorage.setItem(task.id, JSON.stringify(task));
  });

  // convert each task in task list to it's id
  const taskIdList = project.taskList.map((task) => task.id);

  // create a raw todoList and write it to local storage
  const rawTodoList = {
    title: project.title,
    taskIdList,
  };
  localStorage.setItem(project.id, JSON.stringify(rawTodoList));
}
