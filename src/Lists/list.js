import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './listStyles.css';

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            listItems: [],
        }
        this.getSourceLinkItems = this.getSourceLinkItems.bind(this);
    }

    componentDidMount() {
        this.getSourceLinkItems();
    }

    getPlayers(jsonBody) {
        let sourceLinkItems = jsonBody.map( (sourceItem, index) => {
            return (
                <Link to="" className="list-group-item list-group-item-action" key={index}>
                    {sourceItem.firstName + " " + sourceItem.lastName + " #" + sourceItem.jerseyNumber }
                </Link>
            );
        });
        return sourceLinkItems;
    }

    getTeams(jsonBody) {
        let sourceLinkItems = jsonBody.map( (sourceItem, index) => {
            return (
                <Link to="" className="list-group-item list-group-item-action" key={index}>
                    {sourceItem.name }
                </Link>
            );
        });
        return sourceLinkItems;
    }

    getSourceLinkItems() {
        const url = 'http://localhost:8000/' + this.props.sourceURL;
        fetch(url)
            .then( response => {
                return response.json();
            })
            .then( jsonBody => {
                let sourceLinkItems = [];
                if (this.props.sourceURL === 'player') {
                    sourceLinkItems = this.getPlayers(jsonBody);
                } else {
                    sourceLinkItems = this.getTeams(jsonBody);
                }
                this.setState( () => {
                    return {
                        listItems: sourceLinkItems,
                    };
                });
            })
            .catch( () => {
                console.log("Error converting json object to list items");
            })
    }

    render() {
        return (
            <div className="list-group" id="list-width">
                { this.state.listItems }
            </div>
        );
    }
}