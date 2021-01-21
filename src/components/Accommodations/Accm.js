import React, { Component } from 'react';
import './Accm.css';
import Hotel from '../images/places/hotel.jpg';

class Accm extends Component {
    
    render() { 
        return ( 
            <section className="accm-section">
                <div>
                    <h1> Accommodations</h1>
                </div>
                <div className="container-accm">
                    <div className="hotel hotel-logo">
                        <div className="hotel-picture">
                            <img className="highlander" src={Hotel} alt="Highlander" />
                        </div>
                    </div>
                    <div className="hotel hotel-info">
                        <h2>Hotel</h2>
                        <h3>The Highlander Hotel</h3>
                        <a href="https://www.google.com/maps/place/The+Highlander+Hotel/@41.6884292,-91.4975532,17z/data=!3m1!4b1!4m8!3m7!1s0x87e46983f8ad28ed:0x361441f31deb06ef!5m2!4m1!1i2!8m2!3d41.6884292!4d-91.4953645" target="_blank">
                            2525 Highlander Pl, Iowa City, IA 52245
                        </a>< br />
                        <h4>Hotel Amentities</h4>
                        <p>things to do at hotel and link to amentities page</p>
                        <h2>Transportation</h2>
                        <p>Information about transportation</p>
                        <h2>Things To Do In The Area</h2>
                        <p>Things to do...</p>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Accm;