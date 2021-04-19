import { EMPLOYEE_UPDATE,EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from './types'
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
  return (dispatch) => {
    //Access current users employee path and push the information onto corresponding user
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then((dispatch) => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeesFetch = () => {
  //Grabs current user from firebase.auth
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    //Access current users employee path and push the information onto corresponding user
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      })
  };
};