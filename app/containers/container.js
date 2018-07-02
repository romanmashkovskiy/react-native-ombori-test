import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import UserList from '../components/user-list';
import Pulse from '../components/pulse';
import {loadData, setCurrentPage, stopAnimationLoading} from "../actions";


class Container extends Component {
    componentDidMount() {
        setTimeout(() => {this.props.stopAnimationLoading()}, 3000);
    }

    renderList() {
        return (
            <View style={styles.list}>
                <UserList
                    userList={this.props.userList}
                    loadData={this.props.loadData}
                    setCurrentPage={this.props.setCurrentPage}
                    loading={this.props.loading}
                    currentPage={this.props.currentPage}
                />
            </View>
        )
    }

    renderLoading() {
        return (
            <View style={styles.loading}>
                <Pulse/>
            </View>

        )

    }

    render() {
        if (this.props.animationLoading) return this.renderLoading();
        return this.renderList();

    }
}

function mapStateToProps (state) {
    return {
        userList: state.userList,
        currentPage: state.currentPage,
        loading: state.loading,
        animationLoading: state.animationLoading
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        loadData: loadData,
        setCurrentPage: setCurrentPage,
        stopAnimationLoading: stopAnimationLoading
        },
        dispatch)
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    loading: {
        flex: 1,
        justifyContent: 'flex-start'
    }
});

export default connect(mapStateToProps, matchDispatchToProps)(Container);