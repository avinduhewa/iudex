import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';

import App from './App';
import Login from './public/Login';
import DashAdmin from './components/DashboardAdminView/dashboarMainView';


import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();


ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/app" component={App} />
      <Route path="/admin" component={DashAdmin} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));

