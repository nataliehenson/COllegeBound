import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    Header,
    Linking
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

                <View style={{flexDirection: 'row'}}>
                    <Text>{'\u2022'}</Text>
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
                    >
                        clever tagline
                    </Text>
                </View>

                <View style={styles.container1}>
                    <View>
                        <Text style={styles.month}>{dateBuilder(new Date())}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Tasks This Month:</Text>
                        <FlatList
                            data={this.state.todoitems.filter(
                                (todoitems) => todoitems.date == dateBuilder(new Date())
                                //new Date().getMonth() + 1
                            )}
                            //currentMonth = new Date().getMonth() + 1
                            //this.props.todoitems.includes(college.id)
                            renderItem={renderTodayTodo}
                            keyExtractor={(item) => item.id.toString()}
                        />
                        
                    </View>
                    <View>
                        <Tile
                            title="Colleges in Colorado"
                            imageSrc={require("./images/coflag.png")}
                            onPress={() => navigate("Directory")}
                        />
                    </View>
                    <View>
                        <Tile
                            title="Apply to Scholarships"
                            imageSrc={require("./images/scholarships.jpg")}
                            onPress={() => Linking.openURL("https://bold.org/scholarships/")}
                        />
                    </View>
                    <View>
                        <Tile
                            title="What is FAFSA"
                            imageSrc={require("./images/fafsa.jpeg")}
                            onPress={() => Linking.openURL("https://studentaid.gov/help/fafsa")}
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
       margin: 10
        
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
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontStyle: "italic"
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
        backgroundColor: "#012768",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
    },
    month:{
        fontSize: 40,
        fontWeight: "bold",
        marginVertical: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    todoitem: {
        marginLeft: 5,
        fontSize: 22,
        paddingBottom: 5,
        flex: 1, 
      
    }
});

export default Home;
