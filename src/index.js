import {
  initializeProjects,
  addProject,
  getProjects,
} from "./modules/projectManager.js";

import createTodo from "./modules/todo.js";

import {
  addTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  toggleTodoComplete,
} from "./modules/todoManager.js";

initializeProjects();

//create project
const project = addProject("project1");

console.log(project);

//create todo
const todo = createTodo("Todo 55", "Description 1", "2023-12-31", "High");

console.log("todo", todo);

//add todo to project
console.log("Add", addTodo(project.id, todo));
console.log("projects", getProjects());

// Test 2: Get all
console.log("All Todos:", getTodos(project.id));

// Test 3: Get by ID
console.log("Find Todo:", getTodoById(project.id, todo.id));

// Test 4: Update
console.log(
  "Update:",
  updateTodo(project.id, todo.id, {
    title: "Master JavaScript",
    priority: "medium",
  }),
);

// Test 5: Complete
console.log("Complete:", toggleTodoComplete(project.id, todo.id));

console.log("All Todos:", getTodos(project.id));

// Test 6: Delete
console.log("Delete:", deleteTodo(project.id, todo.id));

// Final result
console.log("Final Todos:", getTodos(project.id));
