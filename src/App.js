import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard/dashboard';
import AddLocation from './pages/new-add-location/add-location';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'elliotpallister@outlook.com',
      name: 'Elliot'
    }
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={() => <AddLocation name={this.state.name} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
