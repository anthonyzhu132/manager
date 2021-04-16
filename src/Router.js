import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene initial key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene 
            rightTitle="Add"
            onRight={() => {
              console.log('Test')
            }}
            key="employeeList" 
            component={EmployeeList}  
            title="Employee List"
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;