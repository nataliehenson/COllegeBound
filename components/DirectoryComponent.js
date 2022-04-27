import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
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
            <View>
                <View style={styles.header}>
                    <Text style={styles.name}>Colorado Colleges</Text>
                </View>
                <FlatList
                    data={this.state.colleges}
                    renderItem={renderDirectoryItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },

    body: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        //paddingTop: 20
    },

    header: {
        backgroundColor: "#75896D",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        //paddingTop: 60
    },
});
export default Directory;
