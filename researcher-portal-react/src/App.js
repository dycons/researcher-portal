import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import LoginButton from './components/LoginButton';

/*
This class is the main starting point of the application.
*/
class App extends React.Component {
  constructor() {
    super();
    this.state = { authenticated: false };
  }

  /*
  Returns a BrowserRouter component that displays a LoginButton component 
  only if the user is not authenticated. Clicking the button redirects to 
  the Login component.
  */
  render() {
    document.title = 'Login';

    return (
      <BrowserRouter>
        <div>
          {!this.state.authenticated ? <LoginButton /> : null}
          <Switch>
            <Route path='/token'>
              <Login setAuthn={(authn) => this.setAuthenticated(authn)} isLoggedIn={this.state.authenticated} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  /*
  Sets the authenticated variable in the state to the value of the parameter authn.
  authn is a Boolean.
  */
  setAuthenticated(authn) {
    this.setState({ authenticated: authn });
  }
}

export default App;