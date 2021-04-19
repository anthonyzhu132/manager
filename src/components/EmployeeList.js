import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.DataSource = ds.cloneWithRwos(employees);
  }

  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  };

  componentWillReceiveProps(nextProps) {
    // nextProps are new props that are going to be used to render with
    // this.props are still old props before having information
    this.createDataSource(nextProps);
  }

  render() {
    return (
      <View>
        <Text>
          EmployeeList Test
        </Text>
      </View>
   );
  }
};

export default connect(null, employeesFetch)(EmployeeList);