import React, { useState, useContext, useEffect } from 'react';
import * as uuid from 'uuid';
import { TaskListContext } from '../../../SimpleContext/simpleContext';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ContextProvider, InitialTaskStateInterface, Action, Kind } from '../../../ContextLikeRedux/reducer';
const TaskForm = () => {
  const { state, dispatch } = useContext(ContextProvider);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  console.log('THE STORE:::', state);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({ kind: Kind.UpdateTasksAction, tasks: state.task });
    dispatch({ kind: Kind.UpdateTaskAction, task: { title: '' } });
    // if (!editItem) {
    // addTask(title);
    setTitle('');
  };

  const handleChange = (e: any) => {
    dispatch({ kind: Kind.UpdateTaskAction, task: { title: e.target.value, id: uuid.v4() } });
    // setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Add Task..." value={state.task.title} onChange={handleChange} required className="task-input" />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Task
        </button>
        <button className="btn clear-btn" onClick={() => navigate('/')}>
          Switch plateform
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
