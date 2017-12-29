import React, { Component } from 'react';
import List from '../Lists/list.js';
import AddButton from '../AddButton/addButton.js';
import Modal from '../Modal/modal.js';

export default class TeamPage extends Component {
    render() {
        return (
            <div>
                <Modal modalTitle="Team" />
                <AddButton buttonText="Team" />
                <List sourceURL="team" />
            </div>
        );
    }
}