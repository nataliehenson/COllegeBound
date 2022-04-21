import React, { Component } from "react";
import { View, Platform, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import Directory from "./DirectoryComponent";
import Home from "./Home";
import Favorites from "./Favorites";
import Applied from "./Applied";
import CollegeInfo from "./CollegeInfoComponent";
import Constants from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

/*

const DirectoryNavigator = createStackNavigator(
    {
        Directory: {
            screen: Directory,
            navigationOptions: ({ navigation }) => ({
                headerLeft: (
                    <Icon
                        name="list"
                        type="font-awesome"
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />
                ),
            }),
        },
        CollegeInfo: { screen: CollegeInfo },
    },
    {
        initialRouteName: "Directory",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#75896D",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#75896D",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="home"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const FavoritesNavigator = createStackNavigator(
    {
        Home: { screen: Favorites },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#75896D",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="heart"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const AppliedNavigator = createStackNavigator(
    {
        Home: { screen: Applied },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#75896D",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="check"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="home"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },

        Directory: {
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerLabel: "Colorado Colleges",
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="list"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },

        Favorites: {
            screen: FavoritesNavigator,
            navigationOptions: {
                drawerLabel: "Favorites",
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="heart"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
        Applied: {
            screen: AppliedNavigator,
            navigationOptions: {
                drawerLabel: "Colleges Applied To",
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="check"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
    },
    {
        drawerBackgroundColor: "#5A5F72",
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop:
                        Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
                }}
            >
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: "#75896D",
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
    },
    drawerHeaderText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60,
    },

    stackIcon: {
        marginLeft: 10,
        color: "#fff",
        fontSize: 24,
    },
});


*/

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        )
    }
}

class FavoritesScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Favorites</Text>
            </View>
        )
    }
}
class CollegeScreen extends React.Component {
    render() {
        return (
            <View>
                <Directory/>
            </View>
           /* <View style={styles.container}>
                <Text>History</Text>
            </View> */
        )
    }
}

class CheckListScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Applied</Text>
            </View>
        )
    }
}

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
            screen: Directory,
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
                        <Icon size={25} name="person" color="white"/>
                    </View>
                )
            }
        },
        
        Applied: {
            screen: Applied,
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
        barStyle: { backgroundColor: '#75896D'}
    }

)

//export default Main
  
export default createAppContainer(TabNavigator);