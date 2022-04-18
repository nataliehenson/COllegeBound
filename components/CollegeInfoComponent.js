import React, {Component} from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";
import { COLLEGES } from "../shared/colleges";
import { connect } from 'react-redux';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
      favorites: state.favorites
  };
};

const mapDispatchToProps = {
  postFavorite: animalId => (postFavorite(animalId))
};

function RenderCollege(props) {
    const {college} = props;
  const { navigate } = props;
    if (college) {
        return (
            <View>
                <Card
                    featuredTitle={college.name}
                    image={college.image}>
                        <Text style={{ margin: 10 }}>{`Located in: ${college.location}`}</Text>
                        <Text style={{ margin: 10 }}>{`Type of University: ${college.type}`}</Text>
                        <Text style={{ margin: 10 }}>{college.description}</Text>
                        <View style={styles.cardRow}>
                        <Icon
                            name={props.favorite ? 'heart' : 'heart-o'}
                            type='font-awesome'
                            color='#f50'
                            raised
                            reverse
                            onPress={() => props.favorite ? 
                                console.log('Already set as a favorite') : props.markFavorite()}
                        />
                        </View>
                </Card>
            </View>
        );
    }
    return <View />;
}

class CollegeInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        colleges: COLLEGES,
      };
    }

    markFavorite(collegeId) {
      this.props.postFavorite(collegeId);
    }
  
  
    static NavigationOptions = {
      title: "College Information",
    };
  
  
    render() {
      const collegeId = this.props.navigation.getParam("collegeId");
      const college = this.state.colleges.filter(
        (college) => college.id === collegeId
      )[0];
      const { navigate } = this.props.navigation;
    
  
  
      return (
    
         <RenderCollege 
              college={college}
              navigate = {navigate}
              favorite={this.props.favorites.includes(collegeId)}
              markFavorite={() => this.markFavorite(collegeId)}
          />
         
      );
    }
  }

  const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 30
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CollegeInfo);;
