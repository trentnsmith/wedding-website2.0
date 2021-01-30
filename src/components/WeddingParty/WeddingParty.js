import React, { Component } from 'react';
import './WeddingParty.css';

import QMark from '../images/wedding-party/question.png';
import Grace from '../images/wedding-party/grace.jpg';

class WeddingParty extends Component {
    render() { 
        return (
            <section className="wedding-party">
                <div className="overlay-party"></div>
                <div className="party-header">
                    <h1>Wedding Party</h1>
                </div>
                <div className="container-party">
                    <div className="party party-bride">
                        <ul>
                            <li>
                                <img className="party-photo" src={Grace} alt="img"/>
                                <p className="party-text">Maid of Honor - Grace Larew</p>
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Bridesmaid - Katie Holmested</p>
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Bridesmaid - Molly DePrenger</p>
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Bridesmaid - Ali Nepola</p>
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Bridesmaid - Rachel Stratman</p>
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Bridesmaid - Lauren McEniff</p>
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Bridesmaid - Amber Ritzman</p>
                            </li>
                        </ul>
                    </div>
                    <div className="party party-groom">
                        <ul>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Best Man - Matt Haith</p>
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Groomsman - Nick Smith</p>
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Groomswoman - Kayley Smith</p>
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Groomsman - Brock Pohlmeier</p>                        
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Groomsman - Jake Heim</p>                            
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Groomsman - Harrison Wallin</p>                            
                            </li>
                            <li>
                                <img className="party-photo" src={QMark} alt="img"/>
                                <p className="party-text">Groomsman - Brian Scandariato</p>                            
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default WeddingParty;