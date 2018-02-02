import React, { Component } from 'react';

export default class ProgressBar extends Component {
    render() {
        return (
            <div className="progress" style={{margin: "50px", height: "30px"}}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: this.props.percentage}}>Getting data from Database...</div>
            </div>
        );
    }
}