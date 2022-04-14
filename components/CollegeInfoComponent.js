import React, {Component} from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { COLLEGES } from "../shared/colleges";

function RenderCollege({ college }) {
    if (college) {
        return (
            <Card
                featuredTitle={college.name}
                image={require("./images/csu.png")}
            >
                <Text style={{ margin: 10 }}>{college.location}</Text>
            </Card>
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
          />
         
      );
    }
  }

export default CollegeInfo;
