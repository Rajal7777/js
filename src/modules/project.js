function createProject(name, description) {
  return {
    id: crypto.randomUUID(),
    name,
    todos: [],
    createdAt: new Date().toISOString(),
  };
}

export default createProject;
