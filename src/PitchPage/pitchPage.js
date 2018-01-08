import React, { Component } from 'react';
import Accordian from '../Accordian/accordian.js';

export default class PitchPage extends Component {
    render() {
        return (
            <div className="container">
                <h1>vs. Team Name {this.props.match.params.id}</h1>
                <Accordian gameID={this.props.match.params.id} />
            </div>
        );
    }
}