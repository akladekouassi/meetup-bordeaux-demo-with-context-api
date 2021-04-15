import React, { useContext, ChangeEvent } from 'react';
import * as uuid from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Kind } from '../../../ContextLikeRedux/reducer';
import { ContextProvider } from '../../../ContextLikeRedux/contextProvider';
const TaskForm = () => {
  const { state, dispatch } = useContext(ContextProvider);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({ kind: Kind.UpdateTasksAction, tasks: state.task });
    dispatch({ kind: Kind.UpdateTaskAction, task: { title: '' } });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ kind: Kind.UpdateTaskAction, task: { title: e.target.value, id: uuid.v4() } });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Add Task..." value={state.task.title} onChange={handleChange} required className="task-input" />
        <div className="buttons">
          <button type="submit" className="btn r-add-task-btn">
            Add Task
          </button>
          <button className="btn r-clear-btn" onClick={() => navigate('/')}>
            Switch plateform
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default TaskForm;
