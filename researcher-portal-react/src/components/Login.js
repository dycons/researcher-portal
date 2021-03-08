import React from 'react';
import Keycloak from 'keycloak-js';

/*
This class is responsible for handling Keycloak authentication functionality.
*/
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keycloak: null, isLoggedIn: false, entitlements: [] };
  }

  componentDidMount() {
    this.logInToKeycloak()
      .catch(err => alert(err));
  }

  /*
  Returns the component in the props with the user's entitlements if the user 
  has successfully authenticated.
  Otherwise, returns null.
  */
  render() {
    const children = React.cloneElement(this.props.children, { entitlements: this.state.entitlements });
    if (this.state.keycloak && this.state.isLoggedIn) {
      return children;
    }

    return null;
  }

  /*
  Redirects to the Keycloak login page. 
  Sets the keycloak variable in the state to a Keycloak object. Sets the 
  isLoggedIn variable in the state to true if the user successfully 
  authenticates and false if the user does not.
  */
  async logInToKeycloak() {
    const keycloak = Keycloak('/keycloak.json');
    const authenticated = await keycloak.init({ onLoad: 'login-required' });
    this.setState({ keycloak: keycloak, isLoggedIn: authenticated }, () => this.fetchEntitlements());
  }

  /*
  Fetches user's entitlements from the /api/permissions/{user} endpoint of 
  the REMS service. 
  Sets the entitlements variable in the state to the user's entitlements.
  */
  async fetchEntitlements() {
    const url = 'http://localhost:3001/api/permissions/' + this.state.keycloak.subject;
    const headers = {
      'x-rems-api-key': 'rp',
      'x-rems-user-id': process.env.REACT_APP_REMS_OWNER_ID
    };

    let response;
    try {
      response = await fetch(url, { headers: headers });
    } catch (error) {
      alert('Failed to fetch entitlements from REMS\nError: ' + error.message);
      return;
    }

    if (response.ok) {
      const json = await response.json();
      const entitlements = json.ga4gh_passport_v1;
      this.setState({ entitlements: entitlements });
    }
    else {
      alert('Failed to fetch entitlements from REMS\nError: Invalid response status code');
      return;
    }
  }
}

export default Login;