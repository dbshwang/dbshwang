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
      <h1 className='Test'>
        <div className='NestedAttr'>Work Experience</div>
      </h1>
    );
  }
}

export default WorkPage;
