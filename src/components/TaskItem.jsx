import React from 'react';

const TaskItem = ({ task, onToggleTask, onDeleteTask, onEditTask }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Created just now';
    } else if (diffInHours < 24) {
      return `Created ${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `Created ${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        <span className="task-date">{formatDate(task.createdAt)}</span>
      </div>
      
      <div className="task-actions">
        <button
          className={`toggle-btn ${task.completed ? 'completed' : 'pending'}`}
          onClick={() => onToggleTask(task.id)}
          title={task.completed ? 'Mark as pending' : 'Mark as completed'}
        >
          {task.completed ? '✓' : '○'}
        </button>
        
        <button
          className="edit-btn"
          onClick={() => onEditTask(task)}
          title="Edit task"
        >
          ✎
        </button>
        
        <button
          className="delete-btn"
          onClick={() => onDeleteTask(task.id)}
          title="Delete task"
        >
          ≡
        </button>
      </div>
    </div>
  );
};

export default TaskItem;