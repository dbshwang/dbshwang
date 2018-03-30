import React from 'react';
import {NavigationBar} from 'components';

const HomePage = () => {
  return (
    <div className='Container'>
      <NavigationBar />
      <div className='absolute-middle center'>
        <div className='relative'>
          <h1 className='Name jumbo bold rufina mb0-5'>
            <span>danielhwang</span>
          </h1>
          <h2 className='Barcode mt1-5 absolute-middle jumbo libre'>
            <span>professional deep diver of the DOM</span>
          </h2>
          <h2 className='Subtitle h2 light montserrat'>portfolio of all things DOM related</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
