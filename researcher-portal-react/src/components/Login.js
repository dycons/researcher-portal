import React from 'react';
import Keycloak from 'keycloak-js';

/*
This class is responsible for handling Keycloak authentication functionality.
*/
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keycloak: null, isLoggedIn: false };
  }

  /*
  Redirects to the Keycloak login page. Sets the keycloak variable in the
  state to a Keycloak object. Sets the isLoggedIn variable in the state to
  true if the user successfully authenticates and false if the user does not.
  */
  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    this.setState({ keycloak: keycloak });
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      this.setState({ isLoggedIn: authenticated });
    });
  }

  /*
  Returns the component in the props if the user has successfully authenticated.
  Otherwise, returns null.
  */
  render() {
    if (this.state.keycloak && this.state.isLoggedIn) {
      return this.props.children;
    }

    return null;
  }
}

export default Login;