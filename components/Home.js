import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    Header,
} from "react-native";
import { Card, Tile, Icon } from "react-native-elements";
import { COLLEGES } from "../shared/colleges";
import { TODOITEMS } from "../shared/todoitems";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colleges: COLLEGES,
            todoitems: TODOITEMS,
        };
    }

    static navigationOptions = {
        title: "Home",
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderTodayTodo = ({ item }) => {
            return (
                <View>
                    <Text>{item.name}</Text>
                </View>
            );
        };

        const dateBuilder = (d) => {
            let months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            let days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day}, ${month} ${date}, ${year}`;
        };

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
                <View>
                    <Text style={styles.text}>{dateBuilder(new Date())}</Text>
                </View>
                <View>
                    <Text style={styles.text}>Tasks This Month</Text>
                    <FlatList
                        data={this.state.todoitems.filter(
                            (todoitems) => todoitems.date == "May"
                            //new Date().getMonth() + 1
                        )}
                        //currentMonth = new Date().getMonth() + 1
                        //this.props.todoitems.includes(college.id)
                        renderItem={renderTodayTodo}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View>
                    <Card
                        featuredTitle="Colleges in Colorado"
                        image={require("./images/coflag.png")}
                        onPress={() => navigate("Directory")}
                    />
                </View>
                <View>
                    <Card
                        featuredTitle="Apply to Scholarships"
                        image={require("./images/scholarships.jpg")}
                        path="https://bold.org/scholarships/"
                    />
                </View>
                <View>
                    <Card
                        featuredTitle="What is FAFSA"
                        image={require("./images/fafsa.jpeg")}
                        path="https://studentaid.gov/help/fafsa"
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
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
        fontSize: 20,
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
        backgroundColor: "#75896D",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
    },
});

export default Home;
