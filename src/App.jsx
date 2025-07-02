import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { getTasks, saveTasks, getUser, saveUser, clearUser } from './utils/localStorage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const savedUser = getUser();
    if (savedUser) {
      setUser(savedUser);
      const savedTasks = getTasks();
      setTasks(savedTasks);
    }
  }, []);

  const handleLogin = (username) => {
    setUser(username);
    saveUser(username);
    const savedTasks = getTasks();
    setTasks(savedTasks);
  };

  const handleLogout = () => {
    setUser(null);
    clearUser();
    setTasks([]);
    setFilter('all');
    setShowTaskForm(false);
    setEditingTask(null);
  };

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      description: taskData.description,
      completed: false,
      createdAt: new Date().toISOString()
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setShowTaskForm(false);
  };

  const updateTask = (taskId, taskData) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId
        ? { ...task, title: taskData.title, description: taskData.description }
        : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setEditingTask(null);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
    }
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  const getTaskCounts = () => {
    return {
      all: tasks.length,
      completed: tasks.filter(task => task.completed).length,
      pending: tasks.filter(task => !task.completed).length
    };
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>Hello, {user}!</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="app-content">
        <button 
          className="add-task-btn"
          onClick={() => setShowTaskForm(true)}
        >
          + Add Task
        </button>

        <div className="task-container">
          <TaskFilter
            filter={filter}
            onFilterChange={setFilter}
            taskCounts={getTaskCounts()}
          />

          <TaskList
            tasks={getFilteredTasks()}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
            onEditTask={setEditingTask}
          />
        </div>
      </div>

      {showTaskForm && (
        <TaskForm
          onSubmit={addTask}
          onCancel={() => setShowTaskForm(false)}
        />
      )}

      {editingTask && (
        <TaskForm
          task={editingTask}
          onSubmit={(taskData) => updateTask(editingTask.id, taskData)}
          onCancel={() => setEditingTask(null)}
          isEditing={true}
        />
      )}
    </div>
  );
}

export default App;