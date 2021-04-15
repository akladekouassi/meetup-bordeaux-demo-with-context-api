import React, { useContext } from 'react';
import { TaskListContext } from '../../../SimpleContext/simpleContext';

const Task = ({ task }: any) => {
  const { removeTask } = useContext(TaskListContext);
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
