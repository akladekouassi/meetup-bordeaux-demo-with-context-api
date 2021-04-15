import React, { useContext, FunctionComponent } from 'react';
import { SimpleContext } from '../../../SimpleContext/simpleContext';
import Task from './Task';

const TaskList: FunctionComponent = () => {
  const { tasks } = useContext(SimpleContext);

  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task: any) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
