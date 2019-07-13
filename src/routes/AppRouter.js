import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Home} from '../containers/Home';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { PrivateRoute } from '../routes/PrivateRoute';
import { Profile } from '../containers/Profie';

export function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <PrivateRoute path="/profile" component={Profile}/>

    </Router>
  );
}