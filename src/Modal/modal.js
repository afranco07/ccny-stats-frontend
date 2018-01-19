import React, { Component } from 'react';
import ModalOptions from './modalOptions.js';

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
            player1: '',
            player2: '',
            player3: '',
            player4: '',
            player5: '',
            player6: '',
            player8: '',
            player9: '',
            player10: '',
        };
        this.getFormType = this.getFormType.bind(this);
        this.handleTeamInput = this.handleTeamInput.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleJerseyNumber = this.handleJerseyNumber.bind(this);
        this.createNewTeam = this.createNewTeam.bind(this);
        this.createNewPlayer = this.createNewPlayer.bind(this);
        this.submitToDatabase = this.submitToDatabase.bind(this);
        this.handleLineup = this.handleLineup.bind(this);
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
        } else if (this.props.modalTitle === 'Player') {
            formHolder = (
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" onChange={this.handleFirstName} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" onChange={this.handleLastName} />
                    </div>
                    <ModalOptions title="Team" />
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Jersey Number" onChange={this.handleJerseyNumber} />
                    </div>
                </form>
            );
        } else {
            formHolder = (
                <form>
                    <ModalOptions title="Team" modalID="teamName" selectChange={this.handleTeamInput} />
                    <ModalOptions title="Player" modalID="player1" selectChange={this.handleLineup} />
                    <ModalOptions title="Player" modalID="player2" selectChange={this.handleLineup} />
                    <ModalOptions title="Player" modalID="player3" selectChange={this.handleLineup} />
                    <ModalOptions title="Player" modalID="player4" selectChange={this.handleLineup} />
                    <ModalOptions title="Player" modalID="player5" selectChange={this.handleLineup} />
                    <ModalOptions title="Player" modalID="player6" selectChange={this.handleLineup} />
                    <ModalOptions title="Player" modalID="player7" selectChange={this.handleLineup} />
                    <ModalOptions title="Player" modalID="player8" selectChange={this.handleLineup} />
                    <ModalOptions title="Player" modalID="player9" selectChange={this.handleLineup} />
                    <ModalOptions title="Player" modalID="player10" selectChange={this.handleLineup} />
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
        this.setState({ teamName: event.target.value, teamID: event.target.value });
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

    handleLineup(event) {
        this.setState({ [event.target.id]: event.target.value });
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
        fetch('https://ccnybackend.herokuapp.com/team', postData)
            .then( () => this.props.reload());
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
        fetch('https://ccnybackend.herokuapp.com/player', postData)
            .then( () => this.props.reload());
    }

    createNewGame() {
        let postData = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                teamid : this.state.teamID,
                player1: this.state.player1,
                player2: this.state.player2,
                player3: this.state.player3,
                player4: this.state.player4,
                player5: this.state.player5,
                player6: this.state.player6,
                player7: this.state.player7,
                player8: this.state.player8,
                player9: this.state.player9,
                player10: this.state.player10,
            })
        };
        fetch('https://ccnybackend.herokuapp.com/game', postData)
        .then( () => this.props.reload());
    }

    submitToDatabase() {
        if (this.state.title === 'Team') {
            this.createNewTeam();
        } else if (this.state.title === 'Player') {
            this.createNewPlayer();
        } else {
            this.createNewGame();
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
                            <button type="button" className="btn btn-primary" onClick={this.submitToDatabase} data-dismiss="modal">Add {this.props.modalTitle}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}