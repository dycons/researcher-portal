import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import LoginButton from './components/LoginButton';
import Katsu from './components/Katsu';
import Home from './components/Home';

/*
Returns a BrowserRouter component that specifies the component
that should be displayed for each route.
*/
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LoginButton />
        </Route>
        <Route path='/home'>
          <Login>
            <Home />
          </Login>
        </Route>
        <Route path='/katsu'>
          <Login>
            <Katsu />
          </Login>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;