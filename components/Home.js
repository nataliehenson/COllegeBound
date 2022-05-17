import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    Header,
    Linking,
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
                <View style={{ flexDirection: "row" }}>
                    <Text>{"\u2023"}</Text>
                    <Text style={styles.todoitem}>{item.name}</Text>
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

            let month = months[d.getMonth()];

            return month;
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
                    ></Text>
                </View>

                <View style={styles.container1}>
                    <Card 
                        title= "Tasks for this month:"
                        titleStyle= {{fontSize: 25}}
                        containerStyle= {{marginBottom: 20}}>
                        <FlatList
                            data={this.state.todoitems.filter(
                                (todoitems) =>
                                    todoitems.date == dateBuilder(new Date())
                            )}
                            renderItem={renderTodayTodo}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </Card>
                    <View>
                        <Tile
                            title="Colleges in Colorado"
                            titleStyle={{backgroundColor: 'rgba(0,0,0,.4)', padding: 10, backgroundOpacity: .1}}
                            featured
                            imageSrc={require("./images/coflag.png")}
                            onPress={() => navigate("Directory")}
                        />
                    </View>
                    <View>
                        <Tile
                            title="Apply to Scholarships"
                            featured
                            titleStyle={{backgroundColor: 'rgba(0,0,0,.4)', padding: 10, backgroundOpacity: .1}}
                            imageSrc={require("./images/scholarships.jpg")}
                            onPress={() =>
                                Linking.openURL(
                                    "https://bold.org/scholarships/"
                                )
                            }
                        />
                    </View>
                    <View>
                        <Tile
                            title="What is FAFSA?"
                            featured
                            titleStyle={{backgroundColor: 'rgba(0,0,0,.5)', padding: 10, backgroundOpacity: .1}}
                            imageSrc={require("./images/fafsa.jpeg")}
                            onPress={() =>
                                Linking.openURL(
                                    "https://studentaid.gov/help/fafsa"
                                )
                            }
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    container1: {
        margin: 10,
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
        fontSize: 25,
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    tile: {
        //paddingBottom: 60,
        alignItems: "center",
        flex: 1,
        borderColor: "black",
        borderWidth: 5,
        borderStyle: "solid",
    },
    name: {
        fontSize: 50,
        fontWeight: "bold",
        color: "white",
    },
    header: {
        backgroundColor: "#012768",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
    },

    todoitem: {
        marginLeft: 0,
        fontSize: 20,

        paddingLeft: 10,
        flex: 1,
        marginBottom: 15,
    },
   
});

export default Home;
