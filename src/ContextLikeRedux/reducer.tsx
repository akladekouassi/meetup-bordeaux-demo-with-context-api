import React, { createContext, Dispatch } from 'react';

//INITIAL STATE DEF
export interface Task {
  title: string;
  id?: string;
}
export interface InitialTaskStateInterface {
  task: Task;
  tasks: Task[];
}

// ACTION ENUM
export enum Kind {
  UpdateTaskAction,
  UpdateTasksAction,
}

//ACTIONS
export type Action =
  | {
      kind: Kind.UpdateTaskAction;
      task: Task;
    }
  | {
      kind: Kind.UpdateTasksAction;
      tasks: Task | Task[];
    };

// REDUCER
export const reducer = (state: InitialTaskStateInterface, action: Action): InitialTaskStateInterface => {
  switch (action.kind) {
    case Kind.UpdateTaskAction: {
      return {
        ...state,
        task: action.task,
      };
    }
    case Kind.UpdateTasksAction: {
      if (Array.isArray(action.tasks)) {
        return {
          ...state,
          tasks: action.tasks,
        };
      }
      return {
        ...state,
        tasks: [...state.tasks, action.tasks],
      };
    }

    default:
      return state;
  }
};

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

// WRAPPER TO WRAPPE COMPONENT TO CONSUME THE CONTEXT
export function ContextConsumer(Component: any) {
  return function ConsumerWrapper(props: any) {
    return <ContextProvider.Consumer>{(value) => <Component {...props} context={value} />}</ContextProvider.Consumer>;
  };
}
