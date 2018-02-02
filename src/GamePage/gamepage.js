import React, { Component } from 'react';
import List from '../Lists/list.js';
import AddButton from '../AddButton/addButton.js';
import Modal from '../Modal/modal.js';
import ProgressBar from '../ProgressBar/progressBar.js';

export default class GamePage extends Component {
    constructor() {
        super();
        this.state = {
            reload: false,
            percentage: 15,
        };
        this.reloadPage = this.reloadPage.bind(this);
        this.updatePercentage = this.updatePercentage.bind(this);
    }

    reloadPage() {
        this.setState( () => {
            return {
                reload: !this.state.reload,
            };
        });
    }

    updatePercentage(percent) {
        this.setState( () => {
            return {
                percentage: percent,
            };
        });
    }

    render() {
        return (
            <div>
                <Modal modalTitle="Game" reload={this.reloadPage} />
                <AddButton buttonText="Game" />
                { this.state.percentage < 100 && <ProgressBar percentage={this.state.percentage + "%"} /> }
                <List sourceURL="game" reload={this.state.reload} reloadList={this.reloadPage} increasePercent={this.updatePercentage} />
            </div>
        );
    }
}