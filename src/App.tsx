import React, { useContext } from 'react';
import { ContextProvider, Kind } from './ContextLikeRedux/reducer';
import AppContainer from './pages/simpleContext/AppContainer';
import ContextLikeReduxAppContainer from './pages/contextLikeRedux/AppContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<AppContainer />} />
          <Route path="/contextLikeRedux" element={<ContextLikeReduxAppContainer />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
