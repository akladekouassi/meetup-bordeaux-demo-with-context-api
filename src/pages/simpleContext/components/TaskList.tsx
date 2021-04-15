import React, { useContext } from 'react';
import { TaskListContext } from '../../../SimpleContext/simpleContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

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
