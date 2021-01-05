import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import LoginButton from './components/LoginButton';


function App() {
  document.title = 'Login';


  return (
    <BrowserRouter>
      <div>
        <LoginButton />
        <Switch>
          <Route path='/token' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

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

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { authenticated: false };
//   }

//   render() {
//     document.title = 'Login';
//     console.log(this.state.authenticated)

//     return (
//       <BrowserRouter>
//         <div>
//           <LoginButton />
//           <Switch>

//             <Route path='/login' component={Login} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }

//   isAuthenticated() {
//     this.setState({ authenticated: true });
//   }

//   getLoginButton() {
//     return (
//       <Link to='/login'>
//         Log In
//       </Link>
//     );
//   }
// }

// function App() {
//   return (
//     <Login />
//   );
// }

export default App;