import React, { Component } from 'react';

export default class SubmitPitch extends Component {
    render() {
        const buttonStyle = {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%'
        };
        return (
            <div className="card">
                <div className="card-body">
                    <button style={buttonStyle} type="button" className="btn btn-primary">Submit</button>
                </div>
            </div>
        );
    }
}