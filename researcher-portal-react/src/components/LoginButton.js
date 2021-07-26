import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BoxArrowInRight } from 'react-bootstrap-icons'; 

import './LoginButton.css'

/*
Returns a component displaying the login button.
*/
function LoginButton() {
  document.title = 'Login';

  return (
    <Button size='lg' variant='login' as={Link} to='/home'>
      <BoxArrowInRight className='arrow' /> Log In
    </Button>
  );
}

export default LoginButton;