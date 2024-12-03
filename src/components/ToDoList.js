import React from 'react';

function ToDoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: 'none' }}>
          {task}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
