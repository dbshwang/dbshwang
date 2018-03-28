import 'App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from 'containers/home/HomePage';
import WorkPage from 'containers/work/WorkPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/work' component={WorkPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
