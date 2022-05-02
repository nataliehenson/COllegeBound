import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Card, Icon, Tile } from "react-native-elements";
import { connect } from "react-redux";
import { postFavorite } from "../redux/ActionCreators";
import { postApplied } from "../redux/ActionCreators";
import { COLLEGES } from "../shared/colleges";

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        applied: state.applied,
    };
};

const mapDispatchToProps = {
    postFavorite: (collegeId) => postFavorite(collegeId),
    postApplied: (collegeId) => postApplied(collegeId),
};

function RenderCollege(props) {
    const { college } = props;
    const { navigate } = props;

    if (college) {
        return (
            /* <View>
            <Tile 
               title={college.name}
               captionStyle={college.description}
               imageSrc={college.image}
               acceptance={college.acceptance}

            /> 
          </View> */
            <View>
                <Card featuredTitle={college.name} image={college.image}>
                    <Text style={{ margin: 10 }}>
                        {`${college.undergrads} Undergrads`}
                    </Text>
                    <Text
                        style={{ margin: 10 }}
                    >{`${college.acceptance} Acceptance Rate`}</Text>
                    <Text style={{ margin: 10 }}>
                        {" "}
                        {`${college.averagegpa} Average GPA`}
                    </Text>
                    <Text
                        style={{ margin: 10 }}
                    >{`Located in: ${college.location}`}</Text>
                    <Text
                        style={{ margin: 10 }}
                    >{`Type of University: ${college.type}`}</Text>
                    <Text
                        style={{ margin: 10 }}
                    >{`Top Majors: ${college.topmajors}`}</Text>
                    <View style={styles.cardRow}>
                        <Icon
                            name={props.favorite ? "heart" : "heart-o"}
                            type="font-awesome"
                            color="#f50"
                            raised
                            reverse
                            onPress={() =>
                                props.favorite
                                    ? console.log("Already set as a favorite")
                                    : props.markFavorite()
                            }
                        />
                        <Icon
                            name={
                                props.applied
                                    ? "check-square"
                                    : "check-square-o"
                            }
                            type="font-awesome"
                            color="#f50"
                            raised
                            reverse
                            onPress={() =>
                                props.applied
                                    ? console.log("Already set as applied")
                                    : props.markApplied()
                            }
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

    markApplied(collegeId) {
        this.props.postApplied(collegeId);
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
                navigate={navigate}
                favorite={this.props.favorites.includes(collegeId)}
                applied={this.props.applied.includes(collegeId)}
                markFavorite={() => this.markFavorite(collegeId)}
                markApplied={() => this.markApplied(collegeId)}
            />
        );
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        margin: 30,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CollegeInfo);
