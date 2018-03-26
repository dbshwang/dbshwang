import React, { Component } from 'react';

class HomePage extends Component {
  componentDidMount() {
    window.fetch('/api/drinks')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <div className='col-1 sm-col-5 md-col-8 lg-col-12 mx-auto'>
          <h1 className='rufina gold'>Daniel Hwang</h1>
          <h1 className='libre'>professional deep diver of the DOM</h1>
          <h1 className='montserrat'>Coming soon</h1>
        </div>
      </div>
    );
  }
}

export default HomePage;
