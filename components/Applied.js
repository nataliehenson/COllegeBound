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
    title: "Applied",
  };

  render() {
    

    return (
      <View>
          <Text>Colleges I've Applied To:</Text>
      </View>
    );
  }
}

export default Favorites;