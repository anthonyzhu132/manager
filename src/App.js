import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyDmq4n2304hd2Z2gopel-MpYi5viT3B338",
      authDomain: "manager-be506.firebaseapp.com",
      projectId: "manager-be506",
      storageBucket: "manager-be506.appspot.com",
      messagingSenderId: "45498692005",
      appId: "1:45498692005:web:92d3501bb983be2345784c",
      measurementId: "G-0QCG6Z4MHQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  };
};

export default App;