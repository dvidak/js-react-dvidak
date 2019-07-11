import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <AppRouter/>
  );
}


ReactDOM.render(<App/>, document.getElementById('root'));
