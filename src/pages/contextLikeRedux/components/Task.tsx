import React, { useContext } from 'react';
import { ContextProvider, Kind, Task as TaskI } from '../../../ContextLikeRedux/reducer';

const Task = ({ task }: any) => {
  const { state, dispatch } = useContext(ContextProvider);
  // Remove tasks
  const removeTask = (id: number | string) => {
    const oldTasks = state.tasks.filter((task: TaskI) => task.id !== id);
    dispatch({ kind: Kind.UpdateTasksAction, tasks: oldTasks });
  };
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button className="btn-delete task-btn" onClick={() => removeTask(task.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
