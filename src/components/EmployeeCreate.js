import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import React, { Component } from 'react';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Input from './common/Input';
import Button from './common/Button';
import { Picker } from '@react-native-picker/picker';
import { Text } from 'react-native';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;
    
    this.props.employeeCreate({ name, phone, shift });
  }

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
        <CardItem style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>
            Shift
          </Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
            stlye={{ flex: 1 }}
          >
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardItem>
        <CardItem>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Create
          </Button>
        </CardItem>
      </Card>
    );
  };
};

const styles = {
  pickerTextStyle: {
    fontSize: 18, 
    paddingLeft:20
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);