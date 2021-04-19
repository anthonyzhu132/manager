import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import React, { Component } from 'react';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardItem>
          <Button>
            Save Changes
          </Button>
        </CardItem>
      </Card>
    );
  };
};

export default connect()(EmployeeEdit);