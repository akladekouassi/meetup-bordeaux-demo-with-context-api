import React, { FunctionComponent, useReducer, Dispatch, createContext } from 'react';
import { reducer, InitialTaskStateInterface, Task, Action } from './reducer';

//INITIAL STATE
export const initialState: InitialTaskStateInterface = {
  task: { title: '', id: '' },
  tasks: [],
};

// CONTEXT CREATION
export const ContextProvider = createContext<{
  state: InitialTaskStateInterface;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface ContextLikeReduxProfiderProps {
  children: React.ReactNode;
}

const ContextLikeReduxProfider: FunctionComponent<ContextLikeReduxProfiderProps> = ({ children }: ContextLikeReduxProfiderProps) => {
  const initialTask: Task[] = [];
  const initialState: InitialTaskStateInterface = {
    tasks: initialTask,
    task: { title: '', id: '' },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <ContextProvider.Provider value={{ state, dispatch }}>{children}</ContextProvider.Provider>
    </React.Fragment>
  );
};

export default ContextLikeReduxProfider;

// WRAPPER TO WRAPPE COMPONENT TO CONSUME THE CONTEXT
export function ContextConsumer(Component: any) {
  return function ConsumerWrapper(props: any) {
    return <ContextProvider.Consumer>{(value) => <Component {...props} context={value} />}</ContextProvider.Consumer>;
  };
}
