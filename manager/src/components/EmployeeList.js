import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeesFetch } from '../actions';


class EmployeeList extends Component {
    // should be using componentWillReceiveProps() but can't figure it out for now (can't use this)
    static componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    constructor(props) {
        super(props);

        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        return (
            <View>
                <Text>kek</Text>
                <Text>kek</Text>
                <Text>kek</Text>
                <Text>kek</Text>
                <Text>kek</Text>
                <Text>kek</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return {
        employees
    };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
