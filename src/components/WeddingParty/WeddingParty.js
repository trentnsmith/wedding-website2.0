import React, { Component } from 'react';
import './WeddingParty.css';

// import QMark from '../images/wedding-party/question.png';
import Grace from '../images/wedding-party/grace.jpg';
import Nick from '../images/wedding-party/nick.JPG';
import Kayley from '../images/wedding-party/kayley.JPG';
import Matt from '../images/wedding-party/matt.JPG';
import Brock from '../images/wedding-party/brock.JPG';
import Jake from '../images/wedding-party/jake.JPG';
import Harry from '../images/wedding-party/harry.JPG';
import Brian from '../images/wedding-party/brian.JPG';
import Molly from '../images/wedding-party/molly.JPG';
import Katie from '../images/wedding-party/katie.JPG';
import Rachel from '../images/wedding-party/rachel.JPG';
import Ali from '../images/wedding-party/ali.JPG';
import Lauren from '../images/wedding-party/lauren.JPG';
import Amber from '../images/wedding-party/amber.JPG';

class WeddingParty extends Component {
    render() { 
        return (
            <div>
                <div className="party-header">
                    <h1>Wedding Party</h1>
                </div>
            <section className="wedding-party" id="weddingPartyScroll">
                <div className="overlay-party"></div>
                
                <div className="container-party">
                    <div className="party party-bride">
                        <ul>
                            <li>
                                <img className="party-photo" src={Grace} alt="img"/>
                                <p className="party-text">Maid of Honor - Grace Larew</p>
                            </li>
                            <li>
                                <img className="party-photo" src={Katie} alt="img"/>
                                <p className="party-text">Bridesmaid - Katie Olmsted</p>
                            </li>
                            <li>
                                <img className="party-photo" src={Molly} alt="img"/>
                                <p className="party-text">Bridesmaid - Molly DePrenger</p>
                            </li>
                            <li>
                                <img className="party-photo" src={Ali} alt="img"/>
                                <p className="party-text">Bridesmaid - Ali Nepola</p>
                            </li>
                            <li>
                                <img className="party-photo" src={Rachel} alt="img"/>
                                <p className="party-text">Bridesmaid - Rachel Stratman</p>
                            </li>
                            <li>
                                <img className="party-photo" src={Lauren} alt="img"/>
                                <p className="party-text">Bridesmaid - Lauren McEniff</p>
                            </li>
                            <li>
                                <img className="party-photo" src={Amber} alt="img"/>
                                <p className="party-text">Bridesmaid - Amber Ritzman</p>
                            </li>
                        </ul>
                    </div>
                    <div className="party party-groom">
                        <ul>
                            <li>
                                <img className="party-photo" src={Nick} alt="img"/>
                                <p className="party-text">Best Man - Nick Smith</p>
                            </li>
                            <li>
                                <img className="party-photo" src={Kayley} alt="img"/>
                                <p className="party-text">Groomswoman - Kayley Hazard</p>
                            </li>
                            <li>
                                <img className="party-photo" src={Matt} alt="img"/>
                                <p className="party-text">Groomsman - Matt Haith</p>
                            </li>
                            <li>
                                <img className="party-photo" src={Brock} alt="img"/>
                                <p className="party-text">Groomsman - Brock Pohlmeier</p>                        
                            </li>
                            <li>
                                <img className="party-photo" src={Jake} alt="img"/>
                                <p className="party-text">Groomsman - Jake Heim</p>                            
                            </li>
                            <li>
                                <img className="party-photo" src={Harry} alt="img"/>
                                <p className="party-text">Groomsman - Harrison Wallin</p>                            
                            </li>
                            <li>
                                <img className="party-photo" src={Brian} alt="img"/>
                                <p className="party-text">Groomsman - Brian Scandariato</p>                            
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}
 
export default WeddingParty;