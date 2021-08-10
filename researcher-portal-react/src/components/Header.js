import React from 'react';

import './Header.css';

/*
Returns a component displaying the header.
*/
function Header() {
  return (
    <div className='header'>
      <div className='dycons-logo-title'>
        <img src='logo.png' alt='DyCons' className='logo' />
        <span className='dycons-title'>DyCons</span>
      </div>
      <span className='rp-title'>Researcher Portal</span>
      <div className='dycons-logo-title'></div>
    </div>
  );
}

export default Header;