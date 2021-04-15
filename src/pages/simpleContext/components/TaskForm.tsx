import React, { useState, useContext, ChangeEvent, FunctionComponent } from 'react';
import { SimpleContext } from '../../../SimpleContext/simpleContext';
import { useNavigate } from 'react-router-dom';

const TaskForm: FunctionComponent = () => {
  const { addTask } = useContext(SimpleContext);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTask(title);
    setTitle('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Add Task..." value={title} onChange={handleChange} required className="task-input" />
      <div className="buttons">
        <button type="submit" className="btn s-add-task-btn">
          Add Task
        </button>
        <button className="btn s-clear-btn" onClick={() => navigate('/contextLikeRedux')}>
          Switch plateform
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
