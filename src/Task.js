export default class Task {
  constructor(details, id, listtId, done = false, dueDate = 'no-due-date') {
    this.details = details;
    this.id = id;
    this.listtId = listtId;
    // optional parameters
    this.done = done;
    this.dueDate = dueDate;
  }

  toggleDone() {
    this.done = !this.done;
  }
}
