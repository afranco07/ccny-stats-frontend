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
        const url = 'https://ccnybackend.herokuapp.com/game/' + this.props.gameID;
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
        .catch( () => {
            console.log('Error getting lineup');
        });
    }

    render() {
        return (
            <div id="accordian" role="tablist">
                {this.state.lineup}
            </div>
        );
    }
}