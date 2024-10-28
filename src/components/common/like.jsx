import React, { Component } from "react";

class Like extends Component {
    displayLike = () => {
        console.log('clicked')
    }
    render() {
        let classes = "fa fa-heart"
        classes += this.props.liked ? "-o" : classes;
        return (
            <i
            className= {classes}
            aria-hidden="true"
            onClick={this.props.onClick}
            style={{ cursor: "pointer" }}
            >

            </i>)
    }
}

export default Like;