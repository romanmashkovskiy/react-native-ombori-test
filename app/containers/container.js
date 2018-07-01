import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import UserList from '../components/user-list';
import {loadData, setCurrentPage} from "../actions";


class Container extends Component {

    render() {
        return (
            <View style={styles.container}>
                <UserList userList={this.props.userList} loadData={this.props.loadData} setCurrentPage={this.props.setCurrentPage}
                loading={this.props.loading} currentPage={this.props.currentPage}/>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        userList: state.userList,
        currentPage: state.currentPage,
        loading: state.loading
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        loadData: loadData,
        setCurrentPage: setCurrentPage
        },
        dispatch)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    }
});

export default connect(mapStateToProps, matchDispatchToProps)(Container);