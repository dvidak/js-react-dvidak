import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Home} from '../containers/Home';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { PrivateRoute } from '../routes/PrivateRoute';

export function AppRouter() {
  return (
    <Router>
      <PrivateRoute exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </Router>
  );
}