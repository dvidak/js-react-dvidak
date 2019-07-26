import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import {Home} from '../containers/Home';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Profile } from '../containers/Profile';
import { FlightPage } from '../containers/FlightPage';
import { BookFlightModal} from '../containers/BookFlightModal/BookFlightModal'

export function AppRouter() {
  return (
    <Router>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <PrivateRoute exact path='/' component={Home}/>
      <PrivateRoute path='/flight/:id' component={FlightPage}/>
      <PrivateRoute exact path='/flight/:id/modal' component={BookFlightModal} />
      <PrivateRoute path='/profile' component={Profile}/>
    </Router>
  );
}

function PrivateRoute({component: Component, ...rest}) {
  const token = localStorage.getItem('token');
  
  return (
    <Route
      {...rest}
      component={props =>
        token ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
}