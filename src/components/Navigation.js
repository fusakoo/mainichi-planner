import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div className='nav'>
        <Link className='app-link' to='/'>Home</Link>
        <Link className='app-link' to='/help'>Help</Link>
        <Link className='app-link' to='/setting'>Setting</Link>
      </div> 
    </>
  );
}

export default Navigation;