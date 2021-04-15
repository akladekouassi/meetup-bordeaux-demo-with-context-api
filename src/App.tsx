import React from 'react';
import SimpleContextAppContainer from './pages/simpleContext/AppContainer';
import ContextLikeReduxAppContainer from './pages/contextLikeRedux/AppContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<SimpleContextAppContainer />} />
          <Route path="/contextLikeRedux" element={<ContextLikeReduxAppContainer />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
