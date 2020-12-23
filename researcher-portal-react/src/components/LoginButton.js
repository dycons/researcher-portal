import React from 'react';
import { Link } from 'react-router-dom';

function LoginButton() {
  return (
    <Link to='/token'>
      Log In
    </Link>
  );
}

export default LoginButton;