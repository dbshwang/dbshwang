import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className='NavigationBar center'>
      <ul className='my4 py2 mx-auto'>
        <li className='px1-5 inline-block light caps'>
          <NavLink exact to='/'>Home</NavLink>
        </li>
        <li className='px1-5 inline-block light caps'>
          <NavLink to='/work'>Work</NavLink>
        </li>
        <li className='px1-5 inline-block light caps'>
          <NavLink to='/components'>Components</NavLink>
        </li>
        <li className='px1-5 inline-block light caps'>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li className='px1-5 inline-block light caps'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
