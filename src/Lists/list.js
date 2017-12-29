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

    getSourceLinkItems() {
        fetch(this.props.sourceURL)
            .then( response => {
                return response.json();
            })
            .then( jsonBody => {
                let sourceLinkItems = jsonBody.map( (sourceItem, index) => {
                    return (
                        <Link to="" className="list-group-item list-group-item-action" key={index}>
                            {sourceItem.firstName + " " + sourceItem.lastName}
                        </Link>
                    );
                });
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