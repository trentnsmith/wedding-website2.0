import React, { Component } from 'react';
import './Accm.css';


class Accm extends Component {
    
    render() { 
        return ( 
            <section className="accm-section" id="accmScroll">
                <div>
                    <h1> Accommodations</h1>
                </div>
                <div className="container-accm">
                    <div className="hotel hotel-high">
                        <div className="photo-block highlander">
                            
                        </div>
                        <div className="info-block">
                            
                            <h2>
                                <a href="https://www.highlanderhotel.us/" target="_blank" rel="noreferrer">The Highlander Hotel</a>
                            </h2>
                            <a href="https://www.google.com/maps/place/The+Highlander+Hotel/@41.6884292,-91.4975532,17z/data=!3m1!4b1!4m8!3m7!1s0x87e46983f8ad28ed:0x361441f31deb06ef!5m2!4m1!1i2!8m2!3d41.6884292!4d-91.4953645" target="_blank" rel="noreferrer" >
                                2525 Highlander Pl, Iowa City, IA 52245
                            </a>< br />
                            <p>Please email Jaime Harris directly to reserve a room under the Smith/Larew block.</p>
                            <p>email: jaime@highlanderhotel.us</p>
                            <p className="block_note">*Please note that our room block will close on July 21, 2021. You are still able to book at the hotel after 
                                this day, it will be at regular day rates.
                            </p>
                            <h4><a href="https://www.highlanderhotel.us/urban-resort/amenities" target="_blank" rel="noreferrer" >Hotel Amentities</a></h4>
                            <div>
                                <ul>
                                    <li>Indoor Pool</li>
                                    <li>Hot Tub</li>
                                    <li>Cornhole</li>
                                    <li>Fitness Room</li>
                                    <li>Courtyard</li>
                                    <li>Lending Library</li>
                                    <li>Patio</li>
                                </ul>
                            </div>
                            <h2>Transportation</h2>
                            <p>Transportation will be provided to Walker Homestead from 
                            The Highlander Hotel, and back to the hotel when the reception has ended.</p>
                            <p className="updates">Please check back for updates regarding shuttle times!</p>
                            <p className="updates">We appreciate your RSVP to ensure we have a seat availabe for anyone interested. 
                            Please see the RSVP form.</p>
                        </div>
                    </div>
                    <div className="hotel hotel-iowa">
                        <div className="photo-block iowacity">
                            
                        </div>
                        <div className="info-block">
                            <h2>Things To Do In The Area</h2>
                            <ul className="to-do">
                                <li>
                                    <a href="https://www.icgov.org/terry-trueblood-recreation-area" target="_blank" rel="noreferrer">Terry Trueblood Recreation Area</a>
                                </li>
                                <li>
                                    <a href="https://downtowniowacity.com/experience-downtown/" target="_blank" rel="noreferrer">Downtown Iowa City</a>
                                </li>
                                <li>
                                    <a href="https://www.browndeergolf.org/510/Brown-Deer-Golf-Club" target="_blank" rel="noreferrer">Brown Deer Golf Course</a>
                                </li>
                                <li>
                                    <a href="https://biggrovebrewery.com/" target="_blank" rel="noreferrer">Big Grove Brewery</a>
                                </li>
                                <li>
                                    <a href="https://www.backpocketbrewing.com/" target="_blank" rel="noreferrer">Backpocket Brewery</a>
                                </li>
                                <li>
                                    <a href="http://30hop.com/irl-coralville/" target="_blank" rel="noreferrer">30 Hop American Grill w/ Rooftop Patio</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Accm;