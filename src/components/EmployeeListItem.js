import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardItem from './common/CardItem';


class EmployeeListItem extends Component {

  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardItem>
            <Text style={styles.titleStyle} >
              {name}
            </Text>  
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  };
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default EmployeeListItem;