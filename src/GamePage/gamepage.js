import React, { Component } from 'react';
import List from '../Lists/list.js';
import AddButton from '../AddButton/addButton.js';
import Modal from '../Modal/modal.js';

export default class GamePage extends Component {
    render() {
        return (
            <div>
                <Modal modalTitle="Game" />
                <AddButton buttonText="Game" />
                <List sourceURL="game" />
            </div>
        );
    }
}