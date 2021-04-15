/*eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect } from 'react';
import * as uuid from 'uuid';

export interface Task {
  title: string;
  id: string;
}

interface ContextTypeProps {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  clearList: () => void;
  findItem: (id: string) => void;
  editTask: (title: string, id: string) => void;
  editItem: any;
}

export const TaskListContext = createContext<ContextTypeProps>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  clearList: () => {},
  findItem: () => {},
  editTask: () => {},
  editItem: null,
});

export const TaskListContextConsumer = TaskListContext.Consumer;

interface TaskListContextProviderProps {
  children: React.ReactNode;
}

const TaskListContextProvider = (props: TaskListContextProviderProps): JSX.Element => {
  const initialState: Task[] = JSON.parse(localStorage.getItem('tasks')!) || [];
  const [tasks, setTasks] = useState<{ title: string; id: string }[]>(initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState<Task | undefined>(undefined);

  // Add tasks
  const addTask = (title: string) => {
    setTasks((prevState) => [...prevState, { title, id: uuid.v4() }]);
  };

  // Remove tasks
  const removeTask = (id: number | string) => {
    const oldTasks = tasks.filter((task: Task) => task.id !== id);
    setTasks(() => oldTasks);
  };

  // Clear tasks
  const clearList = () => {
    setTasks(() => []);
  };

  // Find task
  const findItem = (id: string | number) => {
    const item: Task | undefined = tasks.find((task: Task) => task.id === id);
    setEditItem(item);
  };

  // Edit task
  const editTask = (title: string, id: string | number) => {
    const newTasks = tasks.map((task: any) => (task.id === id ? { title, id } : task));
    console.log(newTasks);
    setTasks(newTasks);
    setEditItem(undefined);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;

// WRAPPER TO WRAPPE COMPONENT TO CONSUME THE CONTEXT
export function ContextConsumer(Component: any) {
  return function ConsumerWrapper(props: any) {
    return <TaskListContext.Consumer>{(value) => <Component {...props} context={value} />}</TaskListContext.Consumer>;
  };
}
