import React, { FunctionComponent, useReducer, useState } from 'react';
import { reducer, InitialTaskStateInterface, ContextProvider, Task, Kind } from './reducer';

interface ContextLikeReduxProfiderProps {
  children: React.ReactNode;
}

const ContextLikeReduxProfider: FunctionComponent<ContextLikeReduxProfiderProps> = ({ children }: ContextLikeReduxProfiderProps) => {
  const initialTask: Task[] = JSON.parse(localStorage.getItem('tasks')!) || [];
  const initialState: InitialTaskStateInterface = {
    tasks: initialTask,
    task: { title: '', id: '' },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ContextProvider.Provider value={{ state, dispatch }}>{children}</ContextProvider.Provider>;
};

export default ContextLikeReduxProfider;
