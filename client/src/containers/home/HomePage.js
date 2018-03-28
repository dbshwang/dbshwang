import React from 'react';

const NavigationBar = () => {
  return (
    <div className='center'>
      <ul className='my4 py2 mx-auto'>
        <li className='px1-5 inline-block light caps'>Home</li>
        <li className='px1-5 inline-block light caps'>Work</li>
        <li className='px1-5 inline-block light caps'>Components</li>
        <li className='px1-5 inline-block light caps'>Blog</li>
        <li className='px1-5 inline-block light caps'>Contact</li>
      </ul>
    </div>
  );
}

const HomePage = () => {
  return (
    <div className='Container'>
      <NavigationBar />
      <div className='absolute-middle center'>
        <div className='relative'>
          <h1 className='Name jumbo bold rufina mb0-5'>danielhwang</h1>
          <h2 className='Barcode black libre mt1-5 absolute-middle'>professional deep diver of the DOM</h2>
          <h2 className='h2 light montserrat'>portfolio of all things DOM related</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
