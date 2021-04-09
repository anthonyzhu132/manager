import React, { Component } from 'react';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Input from './common/Input';
import Button from './common/Button';
import { emailChanged, passwordChanged, loginUser  } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props

    this.props.loginUser({ email, password });
  }

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
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardItem>
      </Card>
    )
  };
};

const mapStateToProps = (state) => {
  const { email, password} = state
  return {
    email: email,
    password: password
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);