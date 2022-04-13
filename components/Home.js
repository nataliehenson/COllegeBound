import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Header } from "react-native";
import { Card, Tile, Icon } from "react-native-elements";
import { COLLEGES } from "../shared/colleges";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colleges: COLLEGES,
        };
    }

    static navigationOptions = {
        title: "Home",
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.name}>College Bound</Text>

                    <Text
                        style={{
                            margin: 10,
                            color: "white",

                            fontWeight: "bold",
                        }}
                    >
                        clever tagline
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF5EE",
    },
    card: {
        paddingTop: 50,
        margin: 20,
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text: {
        fontSize: 30,
        margin: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    tile: {
        paddingBottom: 60,
        alignItems: "center",
        flex: 1,
    },
    name: {
        fontSize: 50,
        fontWeight: "bold",
        color: "white",
    },
    header: {
        backgroundColor: "#FF4500",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
});

export default Home;
