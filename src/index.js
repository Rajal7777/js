import createTodo from "./modules/todo.js";
import createProject from "./modules/project.js";

const todo1 = createTodo(
  "Buy groceries",
  "Milk, Eggs, Bread",
  "2024-06-15",
  "High",
);

const project1 = createProject("Personal");

console.log(todo1);
console.log(project1);
