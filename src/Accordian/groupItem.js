import React, { Component } from 'react';
import GroupHeader from './groupHeader.js';
import GroupBody from './groupBody.js';

export default class GroupItem extends Component {
    render() {
        return (
            <div>
                <GroupHeader groupNumber={this.props.groupNumber} 
                    name={this.props.playerName} 
                    number={this.props.playerNumber}
                />
                <GroupBody groupNumber={this.props.groupNumber} />
            </div>
        );
    }
}