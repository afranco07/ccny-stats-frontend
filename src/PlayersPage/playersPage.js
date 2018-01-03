import React, { Component } from 'react';
import List from '../Lists/list.js';
import AddButton from '../AddButton/addButton.js';
import Modal from '../Modal/modal.js';

export default class PlayersPage extends Component {
    constructor() {
        super();
        this.state = {
            reload: false,
        };
        this.reloadPage = this.reloadPage.bind(this);
    }

    reloadPage() {
        this.setState( () => {
            return {
                reload: !this.state.reload
            };
        });
    }

    render() {
        return (
            <div>
                <Modal modalTitle="Player" reload={this.reloadPage} />
                <AddButton buttonText="Player" />
                <List sourceURL="player" reload={this.state.reload} reloadList={this.reloadPage} />
            </div>
        );
    }
}