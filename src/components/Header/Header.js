import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() { 
        return (
            <header id="header" className="site-header">
                <nav className="navbar navbar-expand-md">
                    <div className="navbar-brand">
                        Jean Louise &amp; Trent
                    </div>
                    <button id="navToggle" className="navbar-toggle collapsed" type="button">
                        <div className="menu-toggle">
                            <div className="icon-bar"></div>
                        </div>
                    </button>
                    <div className="navbar-collapse collapse" id="navMain">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a href="#our_story" className="nav-link">Our Story</a>
                            </li>
                            <li className="nav-item">
                                <a href="#events" className="nav-link">Events</a>
                            </li>
                            <li className="nav-item">
                                <a href="#registry" className="nav-link">Registry</a>
                            </li>
                            <li className="nav-item">
                                <a href="#wedding_party" className="nav-link">Wedding Party</a>
                            </li>
                            <li className="nav-item">
                                <a href="#rsvp" className="nav-link">RSVP</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
 
export default Header;