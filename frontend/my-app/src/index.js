import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import NoteStete from './context/NoteStete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <NoteStete>
          <App />
      </NoteStete>
    </Router>
  </React.StrictMode>
);


