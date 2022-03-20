import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <>
      <header>
        <div id='logo'>
          <span className='material-icon'>event</span>
          <span>
            Mainichi Planner
          </span>
        </div>
        <Navigation/>
      </header>
    </>
  );
}

export default Header;