import React, { useContext } from 'react';
import Task from './Task';
import { ContextProvider } from '../../../ContextLikeRedux/contextProvider';
const TaskList = () => {
  const { state } = useContext(ContextProvider);

  return (
    <React.Fragment>
      {state.tasks.length ? (
        <ul className="list">
          {state.tasks.map((task: any) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </React.Fragment>
  );
};

export default TaskList;
