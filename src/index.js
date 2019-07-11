import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Home} from './containers/Home';
import { Login } from './containers/Login';
import { Register } from './containers/Register';
import { PrivateRoute } from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <PrivateRoute exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </Router>
  );
}


ReactDOM.render(<App/>, document.getElementById('root'));
