import React, { Component } from 'react';

export default class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id="addNewModal" tabIndex="-1" role="dialog" aria-labelledby="addNewModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addNewModalLabel">Add New { this.props.modalTitle }</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add Team</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}