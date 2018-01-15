import React, { Component } from 'react';

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
        return (
            <div>{this.state.totalPitches}</div>
        );
    }
}