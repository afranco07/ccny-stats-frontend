import React, { Component } from 'react';
import List from '../Lists/list.js';
import AddButton from '../AddButton/addButton.js';

export default class TeamPage extends Component {
    render() {
        return (
            <div>
                <AddButton buttonText={"Team"} />
                <List />
            </div>
        );
    }
}