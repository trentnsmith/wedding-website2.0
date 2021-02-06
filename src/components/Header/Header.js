import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Hamburger from './Hamburger/Hamburger';
import './Header.css';

class Header extends Component {
    render() { 
        return (
            <header id="header" className="site-header">
                <nav className="navbar navbar-expand-md">
                    <div className="navbar-brand">
                        Jean Louise &amp; Trent
                    </div>
                    {/* <button id="navToggle" className="navbar-toggle collapsed" type="button">
                        <div className="menu-toggle">
                            <div className="icon-bar"></div>
                        </div>
                    </button> */}
                    <div className="navbar-collapse collapse" id="navMain">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                {/* <a href="#our_story" className="nav-link">Our Story</a> */}
                                <Link
                                    activeClass="active"
                                    to="ourStoryScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                Our Story
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="#events" className="nav-link">Events</a> */}
                                <Link
                                    activeClass="active"
                                    to="eventsScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                Events
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="#events" className="nav-link">Events</a> */}
                                <Link
                                    activeClass="active"
                                    to="accmScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                Accommodations
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="#registry" className="nav-link">Registry</a> */}
                                <Link
                                    activeClass="active"
                                    to="registryScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                Registry
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="#wedding_party" className="nav-link">Wedding Party</a> */}
                                <Link
                                    activeClass="active"
                                    to="weddingPartyScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-250}
                                    duration={500}
                                >
                                Wedding Party
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="#rsvp" className="nav-link">RSVP</a> */}
                                <Link
                                    activeClass="active"
                                    to="rsvpScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                RSVP
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                    
                </nav>
                <Hamburger />
            </header>
        );
    }
}
 
export default Header;