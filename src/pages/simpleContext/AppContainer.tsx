import React from 'react';
import SimpleContextProvider from '../../SimpleContext/simpleContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import '../../App.css';

const SimpleContextAppContainer: React.FC = () => {
  return (
    <SimpleContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="header">
            <h1>Task Manager from simple context</h1>
          </div>
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </SimpleContextProvider>
  );
};

export default SimpleContextAppContainer;
