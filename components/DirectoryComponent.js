import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { COLLEGES } from "../shared/colleges";

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colleges: COLLEGES,
        };
    }

    static NavigationOptions = {
        title: "Colorado Colleges",
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.location}
                    leftAvatar={{ source: item.image }}
                    onPress={() =>
                        navigate("CollegeInfo", { collegeId: item.id })
                    }
                />
            );
        };

        return (
            <FlatList
                data={this.state.colleges}
                renderItem={renderDirectoryItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

export default Directory;
