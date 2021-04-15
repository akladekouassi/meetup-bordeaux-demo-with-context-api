import React, { useContext } from 'react';
import { TaskListContext } from '../../../SimpleContext/simpleContext';
import Task from './Task';
import { ContextProvider, InitialTaskStateInterface, Action, Kind } from '../../../ContextLikeRedux/reducer';

const TaskList = () => {
  const { state, dispatch } = useContext(ContextProvider);

  return (
    <div>
      {state.tasks.length ? (
        <ul className="list">
          {state.tasks.map((task: any) => {
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
