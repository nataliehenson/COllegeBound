import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

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

function CollegeInfo(props) {
    return <RenderCollege college={props.college} />;
}

export default CollegeInfo;
