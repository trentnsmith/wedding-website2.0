import React, { Component } from 'react';
import './Accm.css';
import Hotel from '../images/places/hotel.jpg';
import IowaCity from '../images/places/iowacity.jpg';

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
                            <h2>Hotel</h2>
                            <h3>The Highlander Hotel</h3>
                            <a href="https://www.google.com/maps/place/The+Highlander+Hotel/@41.6884292,-91.4975532,17z/data=!3m1!4b1!4m8!3m7!1s0x87e46983f8ad28ed:0x361441f31deb06ef!5m2!4m1!1i2!8m2!3d41.6884292!4d-91.4953645" target="_blank" rel="noreferrer" >
                                2525 Highlander Pl, Iowa City, IA 52245
                            </a>< br />
                            <h4>Hotel Amentities</h4>
                            <p>things to do at hotel and link to amentities page</p>
                            <h2>Transportation</h2>
                            <p>Transportation will be provided to Walker Homestead from 
                            The Highlander Hotel, and back to the hotel when the reception has ended.</p>
                            <p>Please check back for updates!</p>
                            <p>Once the formal invitations are sent, we would like 
                            to get a head count of who will be using the transportation service. 
                            This will be aded to the RSVP!</p>
                        </div>
                    </div>
                    <div className="hotel hotel-iowa">
                        <div className="photo-block iowacity">
                            
                        </div>
                        <div className="info-block">
                            <h2>Things To Do In The Area</h2>
                            <ul>
                                <li>Terry Trueblood Recreation Area</li>
                                <li>Downtown Iowa City</li>
                                <li>Brown Deer Golf</li>
                                <li>Big Grove Brewery</li>
                                <li>Backpocket Brewery</li>
                                <li>30 Hop American Grill w/ Rooftop Patio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Accm;