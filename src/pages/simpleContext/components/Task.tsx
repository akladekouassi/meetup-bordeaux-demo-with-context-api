import React, { useContext, FunctionComponent } from 'react';
import { SimpleContext, Task as TaskI } from '../../../SimpleContext/simpleContext';

interface TaskProps {
  task: TaskI;
}

const Task: FunctionComponent<TaskProps> = ({ task }: TaskProps) => {
  const { removeTask } = useContext(SimpleContext);
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
