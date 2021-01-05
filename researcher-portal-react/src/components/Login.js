import React from 'react';
import Keycloak from 'keycloak-js';
import TokenDisplay from './TokenDisplay';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keycloak: null };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    this.setState({ keycloak: keycloak });
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      this.props.setAuthn(authenticated);
    });
  }

  render() {
    if (this.state.keycloak && this.props.isLoggedIn) {
      return (
        <TokenDisplay
          username={this.state.keycloak.idTokenParsed.preferred_username}
          token={this.state.keycloak.token}
          email={this.state.keycloak.idTokenParsed.email}
        />
      );
    }

    return null;
  }
}

export default Login;