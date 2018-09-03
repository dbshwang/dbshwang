import React from 'react';

class WorkPage extends React.Component {
  componentDidMount() {
    window.fetch('/api/drinks')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className='Container'>
        <div className='WorkSection WorkSection--Kik'>
          <h1 className='white'>Kik.</h1>
        </div>
        <div className='WorkSection WorkSection--Bidvine'>
          <h1 className='white'>Bidvine.</h1>
        </div>
        <div className='WorkSection WorkSection--Skywatch'>
          <h1 className='white'>Skywatch.</h1>
        </div>
        <div className='WorkSection WorkSection--Collage'>
          <h1 className='white'>Collage.</h1>
        </div>
      </div>
    );
  }
}

export default WorkPage;
