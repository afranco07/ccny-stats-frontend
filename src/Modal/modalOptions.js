import React, { Component } from 'react';

export default class ModalOptions extends Component {
    constructor() {
        super();
        this.state = {
            options: [],
        }
        this.getPlayers = this.getPlayers.bind(this);
        this.getTeams = this.getTeams.bind(this);
    }

    componentDidMount() {
        if (this.props.title === 'Player') {
            this.getPlayers();
        } else {
            this.getTeams();
        }
    }

    getPlayers() {
        const url = 'http://localhost:8000/player';
        fetch(url)
        .then( response => {
            return response.json();
        })
        .then( jsonBody => {
            let playerOptions = jsonBody.map( (player, index) => <option key={index}>{player.firstName + ' ' + player.lastName}</option>);
            this.setState( () => {
                return {
                    options: playerOptions,
                }
            });
        })
        .catch( () => {
            console.log('Error converting json');
        })
    }

    getTeams() {
        const url = 'http://localhost:8000/team';
        fetch(url)
        .then( response => {
            return response.json();
        })
        .then( jsonBody => {
            let teamOptions = jsonBody.map( (team, index) => <option key={index}>{team.name}</option>);
            this.setState( () => {
                return {
                    options: teamOptions,
                }
            });
        })
        .catch( () => {
            console.log('Error converting json');
        })
    }

    render() {
        return (
            <div className="form-group">
                <select className="form-control">
                    <option>Select { this.props.title }</option>
                    {this.state.options}
                </select>
            </div>
        );
    }
}