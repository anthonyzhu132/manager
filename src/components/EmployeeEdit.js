import _ from 'lodash';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import React, { Component } from 'react';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import EmployeeForm from './EmployeeForm';
import Confirm from './common/Confirm';
import { Text } from 'react-native-communications';

class EmployeeEdit extends Component {
  state = { showModal: false }

  showModalState() {
    this.setState({ showModal: !this.state.showModal })
  }

  componentWillMount() {
    //For each property in the employee prop that was passed in, update the employee object with the new values
    _.each(this.props,employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    })
  }

  onButtonPress() {
    const { name, phone, shift } = this.props

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props

    Text(phone, `You have your next shift on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardItem>

        <CardItem>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardItem>

      <CardItem>
        <Button onPress={showModalState()}>
          Fire Employee
        </Button>
      </CardItem>

        <Confirm
          visible={this.state.showModal}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  };
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.EmployeeForm;
  
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);