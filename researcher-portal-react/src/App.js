import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import LoginButton from './components/LoginButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = { authenticated: false };
  }

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

  setAuthenticated(authn) {
    this.setState({ authenticated: authn });
  }
}

export default App;