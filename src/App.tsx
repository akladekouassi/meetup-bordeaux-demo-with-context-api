import React, { useContext } from 'react';
import { ContextProvider, Kind } from './ContextLikeRedux/reducer';
import TestPageApp from './pages/testPage';

function App() {
  const { state, dispatch } = useContext(ContextProvider);
  const onChangeStateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({
      kind: Kind.UpdateInitialDataAction,
      initialData: 'JE CHANGE LA VALEUR INITIALE DU STATE',
    });
  };
  return (
    <div className="App">
      <button onClick={(e: any) => onChangeStateValue(e)}>changer la valeur</button>
      <TestPageApp />
    </div>
  );
}

export default App;
