function createTodo(title, description, dueDate, priority) {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    dueDate,
    priority,
    completed: false,
    notes: "",
    checklist: [],
    createAt: new Date().toISOString(),
  };
}

export default createTodo;
