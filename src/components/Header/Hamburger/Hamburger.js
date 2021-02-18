import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Hamburger.css';

// class Hamburger extends Component {
//     constructor() {
//         super();

//         this.state = {
//             showMenu: false,
//         };

//         this.toggleMenu = this.toggleMenu.bind(this);
//         this.closeMenu = this.closeMenu.bind(this);
//     };

//     toggleMenu(event) {
//         event.preventDefault();

//         console.log('showmenu clicked')

//         this.setState({ showMenu: !this.state.showMenu}, () => {
            
//             if (this.state.showMenu) {
//                 document.addEventListener('click', this.closeMenu)
//             }
//             // else {
//             //     document.removeEventListener('click', this.closeMenu)
//             // }
//           }
//           );
//     }

//     closeMenu() {
//         console.log('showmenu closed', this.state.showMenu)
//         // this.setState({ showMenu: false }, () => {
//         //     // document.removeEventListener('click', this.closeMenu);
//         // });
//     };

//     render() {
//         return (
//             <div className="hamburger">
//                 <button className="ham_button" onClick={this.toggleMenu}>
//                     <i class="fas fa-bars" ></i>
//                 </button>

//                 {this.state.showMenu ? (
//                     <div className="main-navigation">
//                         <ul className="ham_menu">
                            
//                             <li className="ham_menu_items">
//                                 <Link
//                                     className="ham_link"
//                                     activeClass="active"
//                                     to="ourStoryScroll"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-70}
//                                     duration={500}
//                                 >
//                                 Our Story
//                                 </Link>
                                
//                             </li>
//                             <li className="ham_menu_items">
//                                 <Link
//                                     className="ham_link"
//                                     activeClass="active"
//                                     to="eventsScroll"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-70}
//                                     duration={500}
//                                 >
//                                 Events
//                                 </Link>
//                             </li>
//                             <li className="ham_menu_items">
//                                 <Link
//                                     className="ham_link"
//                                     activeClass="active"
//                                     to="accmScroll"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-70}
//                                     duration={500}
//                                 >
//                                 Accommodations
//                                 </Link>
//                             </li>
//                             <li className="ham_menu_items">
//                                 <Link
//                                     className="ham_link"
//                                     activeClass="active"
//                                     to="registryScroll"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-70}
//                                     duration={500}
//                                 >
//                                 Registry
//                                 </Link>
//                             </li>
//                             <li className="ham_menu_items">
//                                 <Link
//                                     className="ham_link"
//                                     activeClass="active"
//                                     to="weddingPartyScroll"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-200}
//                                     duration={500}
//                                 >
//                                 Wedding Party
//                                 </Link>
//                             </li>
//                             <li className="ham_menu_items">
//                                 <Link
//                                     className="ham_link"
//                                     activeClass="active"
//                                     to="rsvpScroll"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-70}
//                                     duration={500}
//                                 >
//                                 RSVP
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                  ) :
//                 (null) 
//                 }

//             </div>
//         );
//     };
// };

// export default Hamburger;

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
            document.addEventListener('click', this.closeMenu);
          });
    }
   
    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    };

    render() {
        return (
            <div className="hamburger">
                <button className="ham_button">
                    <i className="fas fa-bars" onClick={this.showMenu}></i>
                </button>

                {this.state.showMenu ? (
                    <div className="main-navigation">
                        <ul className="ham_menu">
                            <li className="ham_menu_items">
                                <Link to="/" className="ham_link">
                                    Home
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link to='/Distilleries' className="ham_link">
                                    Distilleries
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link to='/all-spirits' className="ham_link">
                                    Spirits
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link to='add-spirits' className="ham_link">
                                    Add A New Drink
                                </Link>
                            </li>
                            <li className="ham_menu_items">
                                <Link to='about-page' className="ham_link">
                                    About
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