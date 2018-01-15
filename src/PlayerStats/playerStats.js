import React, { Component } from 'react';
import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export default class PlayerStats extends Component {
    constructor() {
        super();
        this.state = {
            totalPitches: 0,
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
                };
            });
        })
        .catch( () => {
            console.log('Error getting player data with id' + this.props.params.id);
        });
    }

    render() {
        let data = [
            {
                name: 'a',
                value: [5, 12],
            }
        ];

        return (
            <div>
                <ResponsiveContainer width={700} height="80%" >
                    <BarChart data={data} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
                {this.state.totalPitches}
            </div>
        );
    }
}