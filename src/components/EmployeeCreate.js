import React, { Component } from 'react';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Input from './common/Input';
import Button from './common/Button';


class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Input
          label="Name"
          placeholder="Tom"
          />
        </CardItem>
        <CardItem>
          <Input
          label="Phone"
          placeholder="123-123-1234"
          />
        </CardItem>
        <CardItem></CardItem>
        <CardItem>
          <Button>
            Create
          </Button>
        </CardItem>
      </Card>
    );
  };
};

export default EmployeeCreate;