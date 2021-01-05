import React from 'react';

function TokenDisplay(props) {
  document.title = 'Token';

  return (
    <div>
      <h1>Username: {props.username}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Token: {props.token}</h1>
    </div>
  );
}

export default TokenDisplay;