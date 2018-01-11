import React, { Component } from 'react';

export default class BallOrStrike extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body" onChange={this.props.handleRadioButton}>
                    <div className="form-check">
                        <input className="radio" type="radio" name="ballStrike" id="ball" value="ball" />
                        <label className="form-check-label" htmlFor="ball">Ball</label>
                    </div>
                    <div className="form-check">
                        <input className="radio" type="radio" name="ballStrike" id="strike" value="strike" />
                        <label className="form-check-label" htmlFor="strike">Strike</label>
                    </div>  
                </div>
            </div>
        );
    }
}