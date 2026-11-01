import createProjectFactory from "./project.js";

const projects = [];

const DEFAULT_PROJECT_ID = "default-project-id";

//default project
export function initializeProjects() {
  let defaultProject = projects.find(
    (project) => project.id === DEFAULT_PROJECT_ID,
  );

  if (!defaultProject) {
    defaultProject = createProjectFactory("Default Project");
    defaultProject.id = DEFAULT_PROJECT_ID;
    projects.push(defaultProject);
  }

  return defaultProject;
}

//Add a new project
export function addProject(name) {
  const project = createProjectFactory(name);
  projects.push(project);
  return project;
}

//Get all projects
export function getProjects() {
  return projects;
}

//Get single project by id
export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}

//Delete project by id
export function deleteProjectById(id) {
  // Prevent deleting the default project
  if (id === DEFAULT_PROJECT_ID) {
    return false;
  }

  const index = projects.findIndex((project) => project.id === id);

  if (index === -1) {
    return false;
  }

  //delete project from the array
  projects.splice(index, 1);
  return true;
}
