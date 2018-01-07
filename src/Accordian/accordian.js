import React, { Component } from 'react';
import GroupItem from './groupItem.js';

export default class Accordian extends Component {
    constructor() {
        super();
        this.state = {
            lineup: [],
        };
        this.getLineup = this.getLineup.bind(this);
    }

    componentDidMount() {
        this.getLineup();
    }

    getLineup() {
        const url = 'http://localhost:8000/game/1';
        fetch(url)
        .then( response => {
            return response.json();
        })
        .then( jsonBody => {
            let gameLineup = jsonBody.map( (player, index) => {
                return <GroupItem groupNumber={player.id} 
                            key={index} 
                            playerName={player.firstName + ' ' + player.lastName}
                            playerNumber={player.jerseyNumber} 
                        />;
            });
            this.setState( () => {
                return {
                    lineup: gameLineup,
                };
            });
        })
    }

    render() {
        return (
            <div id="accordian" role="tablist">
                {this.state.lineup}
            </div>
        );
    }
}