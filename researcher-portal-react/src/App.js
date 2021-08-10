import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import LoginButton from './components/LoginButton';
import Katsu from './components/Katsu';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />

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

      <Footer />
    </div>
  );
}

export default App;