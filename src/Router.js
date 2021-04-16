import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root">
        <Scene key="auth">
          <Scene initial key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene key="employeeList" component={EmployeeList} title="Employee List" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;