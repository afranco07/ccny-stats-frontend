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
    }

    render() {
        return (
            <div id={"collapse" + this.props.groupNumber} className="collapse" role="tabpanel" aria-labelledby={"heading" + this.props.groupNumber} data-parent="#accordian">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md col-sm-12">
                            <BallOrStrike />
                        </div>
                        <div className="col-md col-sm-12">
                            <PitchResult />
                        </div>
                        <div className="col-md col-sm-12">
                            <SubmitPitch />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}