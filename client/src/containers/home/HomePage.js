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
        <h1 className='gold'>Daniel Hwang</h1>
        <h1>Coming soon.</h1>
      </div>
    );
  }
}

export default HomePage;
