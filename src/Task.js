export default class Task {
  constructor(details, id, projectId, done = false, dueDate = 'no-due-date') {
    this.details = details;
    this.id = id;
    this.projectId = projectId;
    // optional parameters
    this.done = done;
    this.dueDate = dueDate;
  }

  toggleDone() {
    this.done = !this.done;
  }
}
