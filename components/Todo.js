import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";



class Todo extends Component {
    render() {
        return(
            <>
                <View style={styles.header}>
                    <Text style={styles.name}>To-Do</Text>
                </View>
                <ScrollView>
                    <Text style={styles.body}>Request Transcripts</Text>
                </ScrollView>
            </>
        )
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
        paddingTop: 20
    },

    header: {
        backgroundColor: "#75896D",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        paddingTop: 60

    }, 
  });
export default Todo;