import React, { Component } from 'react';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Input from './common/Input';
import Button from './common/Button';
import emailChanged from '../actions/index';

class LoginForm extends Component {
  onEmailChange(text) {

  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input label="Email" placeholder="email@gmail.com" onChangeText={this.onEmailChange.bind(this)}/>
        </CardItem>
        <CardItem>
          <Input secureTextEntry label="password" placeholder="password"/>
        </CardItem>
        <CardItem>
          <Button>
            Login
          </Button>
        </CardItem>
      </Card>
    )
  };
};

export default LoginForm;