import React, { useContext } from 'react';
import { ContextProvider, Kind } from '../../ContextLikeRedux/reducer';
import TaskListContextProvider from '../../SimpleContext/simpleContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

import Header from './components/Header';

import '../../App.css';

function SimpleContextAppContainer() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default SimpleContextAppContainer;
