import React, { Component } from 'react';
import GroupItem from './groupItem.js';

export default class Accordian extends Component {
    render() {
        return (
            <div id="accordian" role="tablist">
                <GroupItem groupNumber="One" />
                <GroupItem groupNumber="Two" />
                <GroupItem groupNumber="Three" />
            </div>
        );
    }
}