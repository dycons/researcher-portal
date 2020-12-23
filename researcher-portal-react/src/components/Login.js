import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import TokenDisplay from './TokenDisplay';
import LoginButton from './LoginButton';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  loginButtonHandler(e) {
    e.preventDefault();
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated });
    });
  }

  render() {
    console.log(this.state)
    if (this.state.authenticated) {
      return (
        <TokenDisplay
          username={this.state.keycloak.idTokenParsed.preferred_username}
          token={this.state.keycloak.token}
          email={this.state.keycloak.idTokenParsed.email}
        />
      );
    }
    else {
      return (
        // <BrowserRouter
          <button onClick={(e) => this.loginButtonHandler(e)}>
            Log In
          </button>
          /* <Switch>
            <Route path='/token' component={Login} />
          </Switch> */
        // </BrowserRouter>
      );
    }
  }
}

export default Login;