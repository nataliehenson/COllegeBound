import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
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
              <ListItem
                  title={item.name}
                  subtitle={item.description}
                  leftAvatar={{source: {uri: baseUrl + item.image}}}
                  onPress={() => navigate('CollegeInfo', {collegeId: item.id})}
              />
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