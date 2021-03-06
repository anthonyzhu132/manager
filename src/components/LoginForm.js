import React, { Component } from 'react';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Input from './common/Input';
import Spinner from './common/Spinner';
import Button from './common/Button';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {

  //Helper function to help keep state of text state for email
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  //Helper function to help keep state of text state for password
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  //Helper function to keep track of button state, for when button is pressed and what to do with email and password text fields
  onButtonPress() {
    const { email, password } = this.props

    this.props.loginUser({ email, password });
  }

  //Helper function to render error message if there is one.
  renderError() { 
    if(this.props.error) {
      return (
        <View style={{ backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    };
  };

  //Helper function to decide whether or not to load spinner or button depending on loading status
  renderButton() {
    if(this.props.loading) {
      return <Spinner size="large"/>
    };

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  };

  render() {
    return (
      <Card>
        <CardItem>
          <Input 
          label="Email" 
          placeholder="email@gmail.com" 
          onChangeText={this.onEmailChange.bind(this)} 
          value={this.props.email} 
          />
        </CardItem>
        <CardItem>
          <Input 
          secureTextEntry 
          label="password" 
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          />
        </CardItem>

        {this.renderError()}

        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    )
  };
};

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state

  return {
    email: email,
    password: password,
    error: error,
    loading: loading
  }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);