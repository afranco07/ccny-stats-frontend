import React, { Component } from 'react';

export default class Modal extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            form: '',
            teamName: '',
            firstName: '',
            lastName: '',
            jersey: '',
        };
        this.getFormType = this.getFormType.bind(this);
        this.handleTeamInput = this.handleTeamInput.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleJerseyNumber = this.handleJerseyNumber.bind(this);
        this.createNewTeam = this.createNewTeam.bind(this);
        this.createNewPlayer = this.createNewPlayer.bind(this);
        this.submitToDatabase = this.submitToDatabase.bind(this);
    }
    
    componentDidMount() {
        this.getFormType();
        this.setState( () => {
            return {
                title: this.props.modalTitle,
            };
        });
    }

    getFormType() {
        let formHolder = '';
        if (this.props.modalTitle === 'Team') {
            formHolder = (
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Team Name" onChange={this.handleTeamInput} />
                        </div>
                    </div>
                </form>
            );
        } else {
            formHolder = (
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" onChange={this.handleFirstName} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" onChange={this.handleLastName} />
                    </div>
                    <div className="form-group">
                        <select className="form-control" id="team">
                            <option>Select Team</option>
                            <option>CCNY</option>
                            <option>Baruch</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Jersey Number" onChange={this.handleJerseyNumber} />
                    </div>
                </form>
            );
        }
        this.setState( () => {
            return {
                form: formHolder,
            };
        });
    }

    handleTeamInput(event) {
        this.setState({ teamName: event.target.value });
    }

    handleFirstName(event) {
        this.setState({ firstName: event.target.value })
    }

    handleLastName(event) {
        this.setState({ lastName: event.target.value })
    }

    handleJerseyNumber(event) {
        this.setState({ jersey: event.target.value })
    }

    createNewTeam() {
        let postData = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                teamName: this.state.teamName
            })
        };
        fetch('http://localhost:8000/team', postData);
    }

    createNewPlayer() {
        let postData = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                teamid: 1,
                jerseyNumber: this.state.jersey,
                year: 1994,
                position: 8,
            })
        };
        fetch('http://localhost:8000/player', postData);
    }

    submitToDatabase() {
        if (this.state.title === 'Team') {
            this.createNewTeam();
        } else {
            this.createNewPlayer();
        }
    }

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
                            { this.state.form }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.submitToDatabase} data-dismiss="modal">Add Team</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}