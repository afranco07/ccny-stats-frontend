import React, { Component } from 'react';

export default class PitchResult extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <select className="form-control">
                        <option>Select Pitch Result</option>
                        <option>Take</option>
                        <option>Fouled Off</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
            </div>
        );
    }
}