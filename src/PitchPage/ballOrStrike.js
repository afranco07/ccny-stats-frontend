import React, { Component } from 'react';

export default class BallOrStrike extends Component {
    constructor() {
        super();
        this.state = {
            radioButtonValue: '',
        };
        this.handleRadioButtons = this.handleRadioButtons.bind(this);
    }

    handleRadioButtons(event) {
        console.log(event.target.value);
        let radioValue = event.target.value;
        if(this.state.radioButtonValue !== undefined) {
            this.setState( () => {
                return {
                    radioButtonValue: radioButtonValue,
                };
            });
        }
        console.log(this.state.radioButtonValue);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body" onChange={this.handleRadioButtons}>
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