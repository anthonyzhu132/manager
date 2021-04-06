import React, { Component } from 'react';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Input from './common/Input';
import Button from './common/Button';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Input label="Email" placeholder="email@gmail.com"/>
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