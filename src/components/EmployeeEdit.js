import _ from 'lodash';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import React, { Component } from 'react';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount() {
    //For each property in the employee prop that was passed in, update the employee object with the new values
    _.each(this.props,employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    })
  }

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

export default connect(null, { employeeUpdate })(EmployeeEdit);