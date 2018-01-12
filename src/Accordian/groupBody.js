import React, { Component } from 'react';
import BallOrStrike from '../PitchPage/ballOrStrike.js';
import PitchResult from '../PitchPage/pitchResult';
import SubmitPitch from '../PitchPage/submitPitch';

export default class GroupBody extends Component {
    constructor() {
        super();
        this.state = {
            ballStrike: '',
            result: '',
        };
        this.radioButtonChanged = this.radioButtonChanged.bind(this);
        this.resultDropChanged = this.resultDropChanged.bind(this);
        this.submitPitchToDatabase = this.submitPitchToDatabase.bind(this);
    }

    radioButtonChanged(event) {
        let radioValue = event.target.value;
        this.setState( () => {
            return {
                ballStrike: radioValue,
            };
        }, () => console.log(this.state.ballStrike));
    }

    resultDropChanged(event) {
        let resultValue = event.target.value;
        this.setState( () => {
            return {
                result: resultValue,
            }
        }, () => console.log(this.state.result));
    }

    submitPitchToDatabase() {
        const pitchUrl = 'http://localhost:8000/pitch';
        const playerUrl = 'http://localhost:8000/player/' + this.props.groupNumber;
        let postData = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ballStrike: this.state.ballStrike,
                result: this.state.result,
                player: this.props.groupNumber
            })
        };
        let playerData = {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                result: this.state.result,
                ballStrike: this.state.ballStrike,
            })
        }
        fetch(pitchUrl, postData);
        fetch(playerUrl, playerData);
        console.log('Sent to database!')
    }

    render() {
        return (
            <div id={"collapse" + this.props.groupNumber} className="collapse" role="tabpanel" aria-labelledby={"heading" + this.props.groupNumber} data-parent="#accordian">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md col-sm-12">
                            <BallOrStrike handleRadioButton={this.radioButtonChanged} />
                        </div>
                        <div className="col-md col-sm-12">
                            <PitchResult handleResult={this.resultDropChanged} />
                        </div>
                        <div className="col-md col-sm-12">
                            <SubmitPitch submitToDatabase={this.submitPitchToDatabase} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}