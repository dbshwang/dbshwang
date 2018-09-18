import React from 'react';
import KikLogo from 'images/kik-logo.png';
import BidvineLogo from 'images/bidvine-logo.png';
import SkywatchLogo from 'images/skywatch-logo.png';
import CollageLogo from 'images/collage-logo.png';

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
        <div className=''>
          <div className='col col-6 px1 mb2'>
            <div className='WorkSection WorkSection--Kik'>
              <div className='WorkSection--header'>
                <img className='my3' src={KikLogo} width={257} alt='Kik'/>
              </div>
              <div className='WorkSection--body'>
                <h3>The First</h3>
                <h3><b>Tech Startup</b></h3>
                <p className='light'>Kik-starting my desire to join startups and become a software developer.</p>
              </div>
            </div>
          </div>
          <div className='col col-6 px1 mb2'>
            <div className='WorkSection WorkSection--Bidvine'>
              <div className='WorkSection--header'>
                <img className='my3' src={BidvineLogo} width={242} alt='Bidvine'/>
              </div>
              <div className='WorkSection--body'>
                <h3>The First</h3>
                <h3><b>Development Job</b></h3>
                <p className='light'>Despite being severely underqualified for the job, one of the co-founders decided to take a chance on me.</p>
              </div>
            </div>
          </div>
          <div className='col col-6 px1 mb2'>
            <div className='WorkSection WorkSection--Skywatch'>
              <div className='WorkSection--header'>
                <img className='my3' src={SkywatchLogo} width={184} alt='Skywatch'/>
              </div>
              <div className='WorkSection--body'>
                <h3>The First</h3>
                <h3><b>Full-stack</b></h3>
                <h3><b>Development Job</b></h3>
                <p className='light'>Your day-to-day doesn’t always match your job description. Take advantage of those opportunies to propel your career into the Sky.</p>
              </div>
            </div>
          </div>
          <div className='col col-6 px1 mb2'>
            <div className='WorkSection WorkSection--Collage'>
              <div className='WorkSection--header'>
                <img className='my3' src={CollageLogo} width={88} alt='Collage'/>
              </div>
              <div className='WorkSection--body'>
                <h3>The First</h3>
                <h3><b>Full-time Job</b></h3>
                <p className='light'>Your life doesn’t always mesh nicely into a Collage. Sometimes you fall in love with a company so much you drop out of school for it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkPage;
