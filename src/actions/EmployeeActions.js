import { EMPLOYEE_UPDATE } from './types'
import firebase from 'firebase';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift}) => {
  //Grabs current user from firebase.auth
  const { currentUser } = firebase.auth();

  //Access current users employee path and push the information onto corresponding user
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
};