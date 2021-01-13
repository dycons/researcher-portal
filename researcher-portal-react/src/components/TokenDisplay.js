import React from 'react';

/*
Returns a component displaying the username, email and token in the props
parameter.
*/
function TokenDisplay(props) {
  document.title = 'Token';

  return (
    <div>
      <h1>Username: {props.username}</h1>
      <h1>Email: {props.email}</h1>
      <h1 style={{wordWrap: 'break-word'}}>Token: {props.token}</h1>
    </div>
  );
}

export default TokenDisplay;