import React, { createContext, Dispatch } from 'react';

export interface InitialStateInterface {
  initialData: string;
}

export enum Kind {
  UpdateInitialDataAction,
}

export type Action = {
  kind: Kind.UpdateInitialDataAction;
  initialData: string;
};

export const reducer = (state: InitialStateInterface, action: Action): InitialStateInterface => {
  switch (action.kind) {
    case Kind.UpdateInitialDataAction: {
      return {
        ...state,
        initialData: action.initialData,
      };
    }

    default:
      return state;
  }
};

export const initialState: InitialStateInterface = {
  initialData: '',
};

export const ContextProvider = createContext<{
  state: InitialStateInterface;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function ContextConsumer(Component: any) {
  return function ConsumerWrapper(props: any) {
    return <ContextProvider.Consumer>{(value) => <Component {...props} context={value} />}</ContextProvider.Consumer>;
  };
}
