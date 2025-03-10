import React, { useState } from 'react';
import { BiLogOut } from 'react-icons/bi'; // Importing Logout icon

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleLogout = () => {
    alert('Logged out successfully!'); // Replace with actual logout logic
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 position-relative'>

      <div className='position-absolute top-0 end-0 p-3'>
        <BiLogOut 
          size={30} 
          className='text-danger cursor-pointer' 
          onClick={handleLogout} 
          title="Logout"
        />
      </div>

      <h2 className='mb-4'>To-Do List</h2>

      <div className='d-flex w-50'>
        <input 
          type='text' 
          className='form-control' 
          placeholder='Enter a task...' 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
        <button className='btn btn-primary ms-2' onClick={addTask}>
          Add
        </button>
      </div>

      <ul className='list-group w-50 mt-4'>
        {tasks.length === 0 && <li className='list-group-item text-center text-muted'>No tasks added</li>}
        {tasks.map((t, index) => (
          <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
            {t}
            <button className='btn btn-danger btn-sm' onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
