import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import {Home} from '../containers/Home';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Profile } from '../containers/Profie';
import { FlightPage } from '../containers/FlightPage';

export function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/flight/:id" component={FlightPage}/>
      <Route path="/register" component={Register}/>
      <PrivateRoute path="/profile" component={Profile}/>
    </Router>
  );
}

function PrivateRoute({component: Component, ...rest}) {
  const token = localStorage.getItem("token");
  console.log(token);
  
  return (
    <Route
      {...rest}
      component={props =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}