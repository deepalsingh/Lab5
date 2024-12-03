import React, { useState } from 'react';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState(''); 

 
  const handleInputChange = (text) => {
    setTaskText(text);
  };

 
  const handleSubmit = () => {
    if (taskText.trim()) { 
      addTask(taskText); 
      setTaskText(''); 
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => handleInputChange(e.target.value)} 
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

export default ToDoForm;
