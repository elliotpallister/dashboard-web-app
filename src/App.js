import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard/dashboard';
import AddLocation from './pages/add-location/add-location';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={() => <Dashboard />}/>
        <Route exact path='/dashboard/addlocation' component={() => <AddLocation />}/>
      </Switch>
    </div>
  );
}

export default App;
