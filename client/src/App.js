import 'App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from 'containers/home/HomePage';
import WorkPage from 'containers/work/WorkPage';
import {ComponentPage} from 'containers/components';
import {BlogPage} from 'containers/blog';
import {ContactPage} from 'containers/contact';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {NavigationBar} from 'components';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Route render={({location}) => (
            <div className='relative'>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames='fade-in' timeout={700}>
                  <Switch location={location}>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/work' component={WorkPage}/>
                    <Route path='/components' component={ComponentPage}/>
                    <Route path='/blog' component={BlogPage}/>
                    <Route path='/contact' component={ContactPage}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
