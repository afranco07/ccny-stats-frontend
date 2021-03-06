import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
     render() {
          return (
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink to="/" className="navbar-brand">CCNY Stats</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
               
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                   <NavLink exact to="/" className="nav-link">Dashboard</NavLink>
                              </li>
                              <li className="nav-item">
                                   <NavLink to="/players" className="nav-link">Players</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink to="/team" className="nav-link">Teams</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink to="/games" className="nav-link">Games</NavLink>
                              </li>
                         </ul>
                         <form className="form-inline my-2 my-lg-0">
                              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                         </form>
                    </div>
               </nav>
          );
     }
}