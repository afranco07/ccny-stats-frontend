import React, { Component } from 'react';
import NavBar from './NavBar/navbar.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <p>This is the test page</p>
            </div>
        );
    }
}