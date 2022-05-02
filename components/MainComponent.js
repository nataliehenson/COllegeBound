import React, { Component } from "react";
import { View, Platform, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import Directory from "./DirectoryComponent";
import Home from "./Home";
import Favorites from "./Favorites";
import Applied from "./Applied";
import CollegeInfo from "./CollegeInfoComponent";
import Todo from "./Todo";
import Constants from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';



const DirectoryNavigator = createStackNavigator(
    {
        Directory: {
            screen: Directory,
           
        },
        CollegeInfo: { screen: CollegeInfo },
    },
    {
        initialRouteName: "Directory",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#012768",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon size={25} name={"home"} color="white"/>
                    </View>
                )
            }
        },

        Colleges: {
            screen: DirectoryNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon size={25} name="school" color="white"/>
                    </View>
                )
            }
        },

     

        Favorites: {
            screen: Favorites,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon size={20} name="heart" type="font-awesome" color="white"/>
                    </View>
                )
            }
        },
        
        "To-do": {
            screen: Todo,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon size={25} name="check" color="white"/>
                    </View>
                )
            }
        },
    },
    {
        initialRouteName: 'Home',
        activeColor: '#fff',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#012768'}
    }

)

  
export default createAppContainer(TabNavigator);