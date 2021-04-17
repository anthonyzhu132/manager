import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
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
          value={this.props.name}
          onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardItem>
        <CardItem>
          <Input
          label="Phone"
          placeholder="123-123-1234"
          value={this.props.phone}
          onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
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

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);