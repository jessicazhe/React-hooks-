import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Child extends Component {
    render() {
        return
        <div>{this.props.match.params.id}</div>
    }
}


class UrlParameters extends Component {
    render() {
        return (
            <div>
                <Link to="/aaa">aaa</Link>
                <br/>
                <Link to="/bbb">bbb</Link>
                <Link to="/ccc">ccc</Link>
                <Route path="/:id" component={Child}></Route>

            </div>
        )
    }
}


export default UrlParameters;