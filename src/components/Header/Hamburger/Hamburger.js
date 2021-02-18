import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Hamburger.css';

class Hamburger extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    };

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            setTimeout(() => {
                document.addEventListener('click', this.closeMenu);
            });
        });
    };

    closeMenu(e) {
        this.setState({ showMenu: false }, () => {
            setTimeout(() => {
                document.removeEventListener('click', this.closeMenu);
            });
        });
    };

    render() {
        return (
            <div className="hamburger">
                <button className="ham_button" onClick={this.showMenu}>
                    <i class="fas fa-bars" ></i>
                </button>

                {this.state.showMenu ? (
                    <div className="main-navigation">
                        <ul className="ham_menu">

                            <li className="ham_menu_items">
                                <Link
                                    className="ham_link"
                                    activeClass="active"
                                    to="ourStoryScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.closeMenu}
                                >
                                Our Story
                                </Link>

                            </li>
                            <li className="ham_menu_items">
                                <Link
                                    className="ham_link"
                                    activeClass="active"
                                    to="eventsScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.closeMenu}
                                >
                                Events
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link
                                    className="ham_link"
                                    activeClass="active"
                                    to="accmScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.closeMenu}
                                >
                                Accommodations
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link
                                    className="ham_link"
                                    activeClass="active"
                                    to="registryScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.closeMenu}
                                >
                                Registry
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link
                                    className="ham_link"
                                    activeClass="active"
                                    to="weddingPartyScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    onClick={this.closeMenu}
                                >
                                Wedding Party
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link
                                    className="ham_link"
                                    activeClass="active"
                                    to="rsvpScroll"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={this.closeMenu}
                                >
                                RSVP
                                </Link>
                            </li>
                        </ul>
                    </div>
                 ) :
                (null)
                }

            </div>
        );
    };
};

export default Hamburger;
