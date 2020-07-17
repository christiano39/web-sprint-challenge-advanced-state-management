import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import SmurfList from './SmurfList';
import NewSmurfForm from './NewSmurfForm';
import Smurf from './Smurf';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/smurfs/:smurfId'>
            <Smurf />
          </Route>

          <Route path='/'>
            <SmurfList />
            <NewSmurfForm />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
