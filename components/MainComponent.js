import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { COLLEGES } from "../shared/colleges";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colleges: COLLEGES,
        };
    }

    render() {
        return <Directory colleges={this.state.colleges} />;
    }
}

export default Main;
