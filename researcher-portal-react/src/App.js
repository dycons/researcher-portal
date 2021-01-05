import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import LoginButton from './components/LoginButton';


// function App() {
//   document.title = 'Login';


//   return (
//     <BrowserRouter>
//       <div>
//         <LoginButton />
//         <Switch>
//           <Route path='/token' component={Login} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// function getLoginBtnIfNotLoggedIn() {
//   const loggedIn = localStorage.getItem('loggedIn');
//   if (loggedIn === null || loggedIn === 'false') {
//     return (
//       <Link to='/login'>
//         Log In
//       </Link>
//     );
//   }
//   return;
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = { authenticated: false };
  }

  render() {
    document.title = 'Login';
    console.log(this.state.authenticated)

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

  // getLoginButton() {
  //   return (
  //     <Link to='/login'>
  //       Log In
  //     </Link>
  //   );
  // }
}

// function App() {
//   return (
//     <Login />
//   );
// }

export default App;