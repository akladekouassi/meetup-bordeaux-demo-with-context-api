import React from 'react';
import ContextLikeReduxProfider from '../../ContextLikeRedux/contextProvider';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import '../../App.css';

const ContextLikeReduxAppContainer: React.FC = () => {
  return (
    <ContextLikeReduxProfider>
      <div className="maincontainer">
        <div className="app-wrapper">
          <div className="header">
            <h1>Task Manager from context like redux</h1>
          </div>
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </ContextLikeReduxProfider>
  );
};

export default ContextLikeReduxAppContainer;
