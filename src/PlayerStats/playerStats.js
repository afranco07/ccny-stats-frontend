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
            hardHitBallsPercentage: 0,
            ballsInPlay: 0,
            oSwingTotal: 0,
            oContactTotal: 0,
            zSwingTotal: 0,
            zSwingContactTotal: 0,
            oSwingPercentage: 0,
            oContactPercentage: 0,
            zSwingPercentage: 0,
            zContactPercentage: 0,
            swingPercentage: 0,
        };
        this.getPlayerStats = this.getPlayerStats.bind(this);
        this.calculatePercentages = this.calculatePercentages.bind(this);
    }

    componentDidMount() {
        this.getPlayerStats();
    }

    getPlayerStats() {
        let url = 'https://ccnybackend.herokuapp.com/player/' + this.props.match.params.id;
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
                    ballsInPlay: jsonBody.ballsInPlay,
                    oSwingTotal: jsonBody.o_swingTotal,
                    oContactTotal: jsonBody.contactOutsideZoneTotal,
                    zSwingTotal: jsonBody.z_swingTotal,
                    zSwingContactTotal: jsonBody.contactInZoneTotal,
                };
            }, this.calculatePercentages);
        })
        .catch( () => {
            console.log('Error getting player data with id' + this.props.params.id);
        });
    }

    calculatePercentages() {
        let hhbPercent = (this.state.hardHitBalls / this.state.ballsInPlay) * 100;
        let oSwingPercent = (this.state.oSwingTotal / this.state.outsideZone) * 100;
        let oContactPercent = (this.state.oContactTotal / this.state.oSwingTotal) * 100;
        let zSwingPercent = (this.state.zSwingTotal / this.state.insideZone) * 100;
        let zContactPercent = (this.state.zSwingContactTotal / this.state.zSwingTotal) * 100;
        let swingPercent = ((this.state.oSwingTotal + this.state.zSwingTotal) / this.state.totalPitches) * 100;
        this.setState( () => {
            return {
                hardHitBallsPercentage: hhbPercent,
                oSwingPercentage: oSwingPercent,
                oContactPercentage: oContactPercent,
                zSwingPercentage: zSwingPercent,
                zContactPercentage: zContactPercent,
                swingPercentage: swingPercent,
            };
        });
    }

    render() {
        const data = [
            {name: "Inside Zone", amount: this.state.insideZone},
            {name: "Outside Zone", amount: this.state.outsideZone},
            {name: "HHB", amount: this.state.hardHitBalls},
            {name: 'Total Pitches', amount: this.state.totalPitches},
        ];

        const percentages = [
            {name: "HHB %", amount: this.state.hardHitBallsPercentage},
            {name: "O-Swing %", amount: this.state.oSwingPercentage},
            {name: "O-Contact %", amount: this.state.oContactPercentage},
            {name: "Z-Swing %", amount: this.state.zSwingPercentage},
            {name: "Z-Contact %", amount: this.state.zContactPercentage},
            {name: "Swing %", amount: this.state.swingPercentage},
        ];

        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={data} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#8884d8" />
                        </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={percentages} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#8884d8" />
                        </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        );
    }
}