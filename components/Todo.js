import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { SwipeRow } from "react-native-swipe-list-view";
import { TODOITEMS } from "../shared/todoitems";
import { TouchableOpacity } from "react-native-gesture-handler";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoitems: TODOITEMS,
        };
    }

    render() {
        return(
            <View>
                <View style={styles.header}>
                    <Text style={styles.name}>To-Do List</Text>
                </View>
                <ScrollView>
                    <Text style={styles.body}>Request Transcripts</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    completedView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
    },
    completedTouchable: {
        backgroundColor: "green",
        height: "85%",
        justifyContent: "center",
    },
    completedText: {
        color: "white",
        fontWeight: "700",
        textAlign: "center",
        fontSize: 16,
        width: 100,
    },

    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
    todo: {
        backgroundColor: "white",
        fontSize: 15,
        color: "black",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        margin: 10,
    },
    body: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        paddingTop: 20,
    },
    header: {
        backgroundColor: "#75896D",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        paddingTop: 60,
    },
    stackIcon: {
        marginLeft: 100,
        color: "black",
        fontSize: 24,
    },
});
export default Todo;
