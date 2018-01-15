import React, { Component } from 'react';
import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import './playerStatsStyles.css';

export default class PlayerStats extends Component {
    constructor() {
        super();
        this.state = {
            totalPitches: 0,
            outsideZone: 0,
            insideZone: 0,
            hardHitBalls: 0,
        };
        this.getPlayerStats = this.getPlayerStats.bind(this);
    }

    componentDidMount() {
        this.getPlayerStats();
    }

    getPlayerStats() {
        let url = 'http://localhost:8000/player/' + this.props.match.params.id;
        fetch(url)
        .then( response => {
            return response.json();
        })
        .then( jsonBody => {
            this.setState( () => {
                return {
                    totalPitches: jsonBody.totalPitches,
                    hardHitBalls: jsonBody.hardHitBalls,
                    outsideZone: jsonBody.pitchesOutsideZone,
                    insideZone: jsonBody.pitchesInsideZone, 
                };
            });
        })
        .catch( () => {
            console.log('Error getting player data with id' + this.props.params.id);
        });
    }

    render() {
        const data = [
            {name: "Inside Zone", amount: this.state.insideZone},
            {name: "Outside Zone", amount: this.state.outsideZone},
            {name: "HHB", amount: this.state.hardHitBalls},
            {name: 'Total Pitches', amount: this.state.totalPitches},
        ];

        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <BarChart width={600} height={300} data={data} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#8884d8" />
                        </BarChart>
                    </div>
                </div>
            </div>
        );
    }
}