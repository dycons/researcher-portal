import React from 'react';
import { Link } from 'react-router-dom';

/*
Returns a component displaying the login button.
*/
function LoginButton() {
  document.title = 'Login';

  return (
    <Link to='/home'>
      Log In
    </Link>
  );
}

export default LoginButton;