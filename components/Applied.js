import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Alert } from "react-native";
import { ListItem, Tile } from "react-native-elements";
import { connect } from 'react-redux';
import { SwipeRow } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteApplied } from '../redux/ActionCreators';
import { COLLEGES } from '../shared/colleges';

const mapStateToProps = state => {
  return {
      applied: state.applied
  };
};

const mapDispatchToProps = {
  deleteApplied: collegeId => deleteApplied(collegeId)
};


class Applied extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colleges: COLLEGES,
    };
  }

  static NavigationOptions = {
    title: "Applied",
  };

  render() {
    const { navigate } = this.props.navigation;
      const renderAppliedItem = ({item}) => {
          return (
            <SwipeRow rightOpenValue={-100} style={styles.swipeRow}>
             
                <View style={styles.deleteView}>
                    <TouchableOpacity
                        style={styles.deleteTouchable}
                        onPress={() =>
                            Alert.alert(
                                'Delete Applied Item?',
                                'Are you sure you wish to delete the college you have applied to :' +
                                    item.name +
                                    '?',
                                [
                                    {
                                        text: 'Cancel',
                                        onPress: () => console.log(item.name + 'Not Deleted'),
                                        style: 'cancel'
                                    },
                                    {
                                        text: 'OK',
                                        onPress: () => this.props.deleteApplied(item.id)
                                    },
                                ],
                                { cancelable: false }
                            )
                        }
                    >
                          <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <View>
                  <Tile
                    onPress={() => navigate('CollegeInfo', {collegeId: item.id})}
                    title={item.name}
                    caption={item.description}
                    imageSrc={item.image}
                    featured
                    key={item}
                  />
                </View>
          </SwipeRow>
          );
    };
    

    return (
      <View>
        <View style={styles.header}>
            <Text style={styles.name}>Colleges I've Applied To:</Text>
        </View>
        <FlatList
              data={this.state.colleges.filter(
                  college => this.props.applied.includes(college.id)
              )}
              renderItem={renderAppliedItem}
              keyExtractor={item => item.id.toString()}
          />
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tile: {
      paddingBottom: 60,
      alignItems: "center",
      flex: 1,
  },
  name: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
  },
  header: {
      backgroundColor: "#75896D",
      alignItems: "center",
      justifyContent: "center",
      padding: 30,
  },
  deleteView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1
},
deleteTouchable: {
    backgroundColor: 'red',
    height: '100%',
    justifyContent: 'center'
},
deleteText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
    width: 100
}
});

export default connect(mapStateToProps, mapDispatchToProps)(Applied);