// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// == Import : local
import 'semantic-ui-css/semantic.min.css';
import './styles/index.scss';
// Composants
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(
  <Router basename="/">
    <App />
  </Router>,
  document.getElementById('root'),
);
