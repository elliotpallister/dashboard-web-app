import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard/dashboard';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={() => <Dashboard />}/>
      </Switch>
    </div>
  );
}

export default App;
