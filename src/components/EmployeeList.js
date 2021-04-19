import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import _ from 'lodash';

class EmployeeList extends Component {

  //Helper function to help create DataSource from the ListView
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.DataSource = ds.cloneWithRows(employees);
  }

  //When Component first renders, try to fetch EmployeeList and call helper function to help create data soruce for the first time
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  };

  //When there are new props, call ComponentWillReceiveProps with new props and call helper function to create new data source with new props
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

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
     return { ...val, uid }
  });

  return { employees };
};

export default connect(mapStateToProps, employeesFetch)(EmployeeList);