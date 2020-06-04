import React from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default  withRouter(App);
