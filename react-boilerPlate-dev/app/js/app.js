import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Menu from './components/Global/Menu.jsx';
import Login from './components/Global/Login.jsx';
import Home from './components/Global/Home.jsx';
import Logout from './components/Global/Logout.jsx';
import Signup from './components/Global/Signup.jsx';



injectTapEventPlugin();

function requireAuth(nextState, replace){
  var token = localStorage.getItem('myTokens');
  if (!token){
    replace({
      pathname: "/home"
    })
  }
}

ReactDOM.render((
  <MuiThemeProvider>
     <Router history={hashHistory}>
       <Route path = "/" component = {Menu}/>
       <Route path = "/login" component = {Login}/>
       <Route path = "/signup" component = {Signup}/>
       <Route path = "/home" component = {Home} OnEnter = {requireAuth}/>
       <Route path ="/logout" component = {Login} />
     </Router>
  </MuiThemeProvider>
), document.getElementById('app')
);
