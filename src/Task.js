export default class Task {
  constructor(details, id, listId, done = false, dueDate = 'no-due-date') {
    this.details = details;
    this.id = id;
    this.listId = listId;
    // optional parameters
    this.done = done;
    this.dueDate = dueDate;
  }

  toggleDone() {
    this.done = !this.done;
  }
}
