import React from 'react';
import Task from './Tasks';

const Todo = ({ tasks, completeTask, removeTask }) => {
  return (
    <div className="todo-List">
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default Todo;
