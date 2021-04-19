import { EMPLOYEE_UPDATE } from './types'
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift}) => {
  //Grabs current user from firebase.auth
  const { currentUser } = firebase.auth();

  //Using thunk, after process is complete, use Action to bring user back to EmployeeList after adding user
  return () => {
    //Access current users employee path and push the information onto corresponding user
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => Actions.employeeList())
  };
};