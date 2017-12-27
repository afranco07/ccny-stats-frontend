import React, { Component } from 'react';
import NavBar from '../NavBar/navbar.js';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <p>The actual homepage</p>
            </div>
        );
    }
}