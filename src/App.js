import React, { Component } from 'react';
import { Route,Redirect } from "react-router-dom";

import DocumentTitle from 'react-document-title';


import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import CreateUserScreen from './Screen/CreateUserScreen';
//import TabBarScreen from './Screen/TabBarScreen';
import CreateMessageScreen from './Screen/CreateMessageScreen';

class App extends Component {
  render() {
    return (
        <div>
          <Route path={'/LoginScreen'} component={LoginScreen} />
          <Route path={'/RegisterScreen'} component={RegisterScreen} />
          <Route path={'/CreateUserScreen'} component={CreateUserScreen} />
          <Route path={'/CreateMessageScreen'} component={CreateMessageScreen} />
        </div>
    );
  }
}

export default App;
