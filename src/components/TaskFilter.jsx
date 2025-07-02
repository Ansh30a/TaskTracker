import React from 'react';

const TaskFilter = ({ filter, onFilterChange, taskCounts }) => {
  const filters = [
    { key: 'all', label: 'All', count: taskCounts.all },
    { key: 'completed', label: 'Completed', count: taskCounts.completed },
    { key: 'pending', label: 'Pending', count: taskCounts.pending }
  ];

  return (
    <div className="task-filters">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          className={`filter-btn ${filter === key ? 'active' : ''}`}
          onClick={() => onFilterChange(key)}
        >
          {label} ({count})
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;