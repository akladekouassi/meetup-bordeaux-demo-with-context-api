import React, { useContext, Dispatch, useEffect } from 'react';
import ContextLikeReduxProfider from '../../ContextLikeRedux/contextProvider';
import { ContextProvider, InitialTaskStateInterface, Action } from '../../ContextLikeRedux/reducer';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import '../../App.css';

function AppContainer() {
  const { state } = useContext(ContextProvider);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);
  return (
    <ContextLikeReduxProfider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </ContextLikeReduxProfider>
  );
}

export default AppContainer;
