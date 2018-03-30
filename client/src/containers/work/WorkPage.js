import React from 'react';
import {NavigationBar} from 'components';

class WorkPage extends React.Component {
  componentDidMount() {
    window.fetch('/api/drinks')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <h1 className='Test'>
          <div className='NestedAttr'>Work Experience</div>
        </h1>
      </div>
    );
  }
}

export default WorkPage;
