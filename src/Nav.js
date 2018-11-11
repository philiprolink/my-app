import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <a className="navbar-brand" href="#">Philip Rolink</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default Nav;
