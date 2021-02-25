import React, { FunctionComponent, useReducer } from 'react';
import { reducer, InitialStateInterface, ContextProvider } from './reducer';

interface ContextLikeReduxProfiderProps {
  children: React.ReactNode;
}

const ContextLikeReduxProfider: FunctionComponent<ContextLikeReduxProfiderProps> = ({ children }: ContextLikeReduxProfiderProps) => {
  const initialState: InitialStateInterface = {
    initialData: 'La valeur initiale du state',
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ContextProvider.Provider value={{ state, dispatch }}>{children}</ContextProvider.Provider>;
};

export default ContextLikeReduxProfider;
