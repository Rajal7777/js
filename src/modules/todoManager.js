import { getProjectById } from "./projectManager.js";

//Add todo to a project
export function addTodo(projectId, todo) {
  const project = getProjectById(projectId);

  if (!project) {
    return false;
  }

  project.todos.push(todo);
  return true;
}

//Get all todos from a project
export function getTodos(projectId) {
  const project = getProjectById(projectId);
  return project ? project.todos : [];
}

//Get a specific todo by ID
export function getTodoById(projectId, todoId) {
  const project = getProjectById(projectId);

  //undefined not initialized
  if (!project) {
    return undefined;
  }

  return project.todos.find((todo) => todo.id === todoId);
}

//Update  todo
export function updateTodo(projectId, todoId, updatedTodo) {
  const project = getProjectById(projectId);

  if (!project) {
    return false;
  }

  //find the todo object
  const todoObject = project.todos.find((todo) => todo.id === todoId);

  /** 
  const todoindex = project.todos.findIndex((todo) => todo.id === todoId);
 if (todoindex === -1) {
    return false;
 }
project.todos[todoindex] = updatedTodo;
**/

  if (!todoObject) {
    return false;
  }

  // Update the properties of the existing todo object with the new values
  Object.assign(todoObject, updatedTodo);
  return true;
}

//Delete todo
export function deleteTodo(projectId, todoId) {
  const project = getProjectById(projectId);

  if (!project) {
    return false;
  }

  const todoIndex = project.todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return false;
  }

  // Remove the todo from the project's todos array
  project.todos.splice(todoIndex, 1);
  return true;
}

//Todo completion status
export function toggleTodoComplete(projectId, todoId) {
  const project = getProjectById(projectId);

  if (!project) {
    return false;
  }

  const todo = project.todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return false;
  }

  //toggle complete status
  todo.completed = !todo.completed;
  return true;
}
