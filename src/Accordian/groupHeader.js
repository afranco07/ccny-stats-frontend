import React, { Component } from 'react';

export default class GroupHeader extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={"heading" + this.props.groupNumber}>
                    <h5 className="mb-0">
                        <a data-toggle="collapse" href={"#collapse" + this.props.groupNumber} role="button" aria-expanded="true" aria-controls={"collapse" + this.props.groupNumber}>
                            Group Item #{this.props.groupNumber}
                        </a>
                    </h5>
                </div>
            </div>
        );
    }
}