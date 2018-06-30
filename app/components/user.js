import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';



class User extends Component {

    render () {
        return (
            <View style={styles.container}>
                <Text>{this.props.user.first_name} {this.props.user.last_name}</Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default User;