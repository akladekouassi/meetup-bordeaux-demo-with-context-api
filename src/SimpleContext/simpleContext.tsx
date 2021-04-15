/*eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';
import * as uuid from 'uuid';

export interface Task {
  title: string;
  id: string;
}

interface ContextTypeProps {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
}

export const SimpleContext = createContext<ContextTypeProps>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

export const SimpleContextConsumer = SimpleContext.Consumer;

interface SimpleContextProviderProps {
  children: React.ReactNode;
}

const SimpleContextProvider = (props: SimpleContextProviderProps): JSX.Element => {
  const initialState: Task[] = [];
  const [tasks, setTasks] = useState<{ title: string; id: string }[]>(initialState);

  // Add tasks
  const addTask = (title: string) => {
    setTasks((prevState) => [...prevState, { title, id: uuid.v4() }]);
  };

  // Remove tasks
  const removeTask = (id: number | string) => {
    const oldTasks = tasks.filter((task: Task) => task.id !== id);
    setTasks(() => oldTasks);
  };

  return (
    <React.Fragment>
      <SimpleContext.Provider
        value={{
          tasks,
          addTask,
          removeTask,
        }}
      >
        {props.children}
      </SimpleContext.Provider>
    </React.Fragment>
  );
};

export default SimpleContextProvider;

// WRAPPER TO WRAPPE COMPONENT TO CONSUME THE CONTEXT
export function ContextConsumer(Component: any) {
  return function ConsumerWrapper(props: any) {
    return <SimpleContext.Consumer>{(value) => <Component {...props} context={value} />}</SimpleContext.Consumer>;
  };
}
