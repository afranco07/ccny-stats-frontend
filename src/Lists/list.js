import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './listStyles.css';

export default class List extends Component {
    render() {
        return (
            <div className="list-group" id="list-width">
                <Link to="#ccny" className="list-group-item list-group-item-action">CCNY</Link>
                <Link to="#baruch" className="list-group-item list-group-item-action">Baruch</Link>
            </div>
        );
    }
}