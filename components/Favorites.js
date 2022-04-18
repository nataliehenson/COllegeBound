import React, { Component } from "react";
import { Text, View, FlatList, ScrollView, } from "react-native";
import { ListItem, Tile } from "react-native-elements";
import { connect } from 'react-redux';
import { baseUrl } from '../baseUrl';
import { COLLEGES } from '../shared/colleges';

//read data from state
const mapStateToProps = state => {
  return {
      favorites: state.favorites
  };
};


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colleges: COLLEGES,
    };
  }


  static NavigationOptions = {
    title: "Favorites",
  };

    render() {
      const { navigate } = this.props.navigation;
      const renderFavoriteItem = ({item}) => {
          return (
            <ScrollView>
            <Tile
              onPress={() => navigate('CollegeInfo', {collegeId: item.id})}
              title={item.name}
              caption={item.description}
              imageSrc={item.image}
              featured
              key={item}
            />
          </ScrollView>
          );
      };

      return (
        <FlatList
            data={this.state.colleges.filter(
                college => this.props.favorites.includes(college.id)
            )}
            renderItem={renderFavoriteItem}
            keyExtractor={item => item.id.toString()}
        />
    );
  }
}

//connect component to redux
export default connect(mapStateToProps)(Favorites);