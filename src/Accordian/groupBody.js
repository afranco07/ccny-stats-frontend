import React, { Component } from 'react';

export default class GroupBody extends Component {
    render() {
        return (
            <div id={"collapse" + this.props.groupNumber} className="collapse" role="tabpanel" aria-labelledby={"heading" + this.props.groupNumber} data-parent="#accordian">
                <div className="card-body">
                    This is the card body for item #{this.props.groupNumber}
                </div>
            </div>
        );
    }
}