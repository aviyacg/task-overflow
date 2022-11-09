export default class Task {
  constructor(title, id, projectId, done = false, dueDate = 'no-due-date') {
    this.title = title;
    this.id = id;
    this.projectId = projectId;
    // optional parameters
    this.done = done;
    this.dueDate = dueDate;
  }
}
