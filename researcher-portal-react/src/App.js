import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import LoginButton from './components/LoginButton';

/*
Returns a BrowserRouter component that displays a LoginButton component. 
Clicking the button redirects to the Login component.
*/
function App() {
  document.title = 'Login';

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/'>
            <LoginButton />
          </Route>
          <Route path='/token'>
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;