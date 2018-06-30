import React, {Component} from 'react';
import User from "./user";
import { StyleSheet, View } from 'react-native';

class  UserList extends Component {
    render() {
        return (
            <View style={styles.container}>
                    {
                        this.props.userList.map ((user) => {
                            return (
                                <User key={user.id} user={user}/>
                            );
                        })
                    }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default UserList;