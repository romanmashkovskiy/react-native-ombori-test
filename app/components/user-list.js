import React, {Component} from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class  UserList extends Component {

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "96%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "4%"
                }}
            />
        );
    };

    renderFooter = () => {
        if (!this.props.loading && this.props.currentPage > 4) return (
            <Text style={{alignSelf: 'center'}}>No more users to load</Text>
        );

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    handleLoadMore = () => {
        this.props.setCurrentPage(this.props.currentPage+1);
        if (this.props.currentPage > 4) return;
        this.props.loadData(this.props.currentPage+1);
    };

    render() {

        return (
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                data={this.props.userList}
                renderItem={({ item }) => (
                    <ListItem
                        roundAvatar
                        title={`${item.first_name} ${item.last_name}`}
                        avatar={{ uri: item.avatar }}
                        containerStyle={{ borderBottomWidth: 0, height: 150 }}
                        hideChevron

                    />
                )}
                keyExtractor={item => `${item.id}`}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={ <Text style={{alignSelf: 'center'}}>Users</Text> }
                ListFooterComponent={this.renderFooter}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={1}
            />
    </List>
    );
    }
}

export default UserList;


