import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  static NavigationOptions = {
    title: "Favorites",
  };

  render() {
    

    return (
      <View>
          <Text>Favorites</Text>
      </View>
    );
  }
}

export default Favorites;