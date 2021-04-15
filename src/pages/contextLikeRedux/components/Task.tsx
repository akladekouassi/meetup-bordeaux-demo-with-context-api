import React, { useContext } from 'react';
import { Kind, Task as TaskI } from '../../../ContextLikeRedux/reducer';
import { ContextProvider } from '../../../ContextLikeRedux/contextProvider';
const Task = ({ task }: any) => {
  const { state, dispatch } = useContext(ContextProvider);
  // Remove tasks
  const removeTask = (id: number | string) => {
    const newTasks = state.tasks.filter((task: TaskI) => task.id !== id);
    dispatch({ kind: Kind.UpdateTasksAction, tasks: newTasks });
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
