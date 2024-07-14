import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function Tasks() {
  const [tasks, setTasks] = useState([
    { title: 'Learn React', completed: false },
    { title: 'Build a To-Do List', completed: false },
    { title: 'Deploy to GitHub Pages', completed: false }
  ]);

  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <TodoList
          tasks={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      </div>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a task..."
          onKeyDown={e => {
            if (e.key === 'Enter') {
              addTask(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}

export default Tasks;
