import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js'; // This includes Popper.js

import './App.css';
import WebRoutes from './components/webroutes.component';

function App() {
  return (
    <Router>
      <WebRoutes />
    </Router>
  );
}

export default App;
