export const getTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasks = (tasks) => {
  console.log("saving task to localStorage");
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
