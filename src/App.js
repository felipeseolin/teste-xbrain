import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';


import BuyPage from './pages/BuyPage/BuyPage';
import FinishPage from './pages/FinishPage/FinishPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/finish">
            <FinishPage />
          </Route>
          <Route path="/">
            <BuyPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
