// User management
export const saveUser = (username) => {
    localStorage.setItem('taskTracker_user', username);
  };
  
  export const getUser = () => {
    return localStorage.getItem('taskTracker_user');
  };
  
  export const clearUser = () => {
    localStorage.removeItem('taskTracker_user');
  };
  
  // Task management
  export const saveTasks = (tasks) => {
    localStorage.setItem('taskTracker_tasks', JSON.stringify(tasks));
  };
  
  export const getTasks = () => {
    const tasks = localStorage.getItem('taskTracker_tasks');
    return tasks ? JSON.parse(tasks) : [];
  };
  
  export const clearTasks = () => {
    localStorage.removeItem('taskTracker_tasks');
  };
  
  // Sample data for testing
  export const sampleTasks = [
    {
      id: 1,
      title: "Complete React assignment",
      description: "Build a task tracker application",
      completed: false,
      createdAt: "2024-01-15T10:00:00Z"
    },
    {
      id: 2,
      title: "Review JavaScript concepts",
      description: "Go through ES6+ features",
      completed: true,
      createdAt: "2024-01-14T15:30:00Z"
    }
  ];