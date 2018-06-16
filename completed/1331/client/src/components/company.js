import React, { Component } from 'react';
import NavBar from "./navbar";

export default class Company extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1> This is Company Component </h1>
            </div>
        )
    }
}