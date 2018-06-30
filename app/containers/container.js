import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import UserList from '../components/user-list';


class Container extends Component {

    render() {
        return (
            <View style={styles.container}>
                <UserList userList={this.props.userList}/>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        userList: state.userList
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({

        },
        dispatch)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default connect(mapStateToProps, matchDispatchToProps)(Container);