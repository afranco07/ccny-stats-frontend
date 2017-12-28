import React, { Component } from 'react';
import './addButtonStyles.css';

export default class AddButton extends Component {
    render() {
        return (
            <button type="button" id="addButton" className="btn btn-primary btn-lg btn-block">Add { this.props.buttonText }</button>
        );
    }
}