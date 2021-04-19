import React, { Component } from 'react';
import { Text } from 'react-native';
import CardItem from './common/CardItem';

class EmployeeListItem extends Component {
  render() {
    const { name } = this.props.employee;

    return (
      <CardItem>
        <Text>
          {name}
        </Text>
      </CardItem>
    );
  };
};

export default EmployeeListItem;