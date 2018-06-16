import React, { Component } from 'react';
import NavBar from "./navbar";

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1> This is Gallery Component </h1>
            </div>
        )
    }
}