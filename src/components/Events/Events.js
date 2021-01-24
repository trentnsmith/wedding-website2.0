import React, { Component } from 'react';
import './Events.css';

class Events extends Component {
    render() { 
        return (
            <section className="events-section">   
                <div>
                    <h1>Events</h1>
                </div>
                <div className="container-events"> 
                    <div className="event">
                        <div className="wedding-event">
                            <div className="information info-church">
                                <h2>Wedding</h2>
                                <h3>St Mary's Church</h3>
                            </div>
                        </div>
                        <div>
                            <p>
                                <a href="https://www.google.com/maps/place/St+Mary's+Church/@41.6627652,-91.5341255,17z/data=!3m1!4b1!4m5!3m4!1s0x87e441f0444cad4b:0xef7278d071e93764!8m2!3d41.6627652!4d-91.5319368" target="_blank" rel="noreferrer" >
                                    228 E Jefferson St, Iowa City, IA 52245
                                </a><br />
                                August 21st, 2021<br />
                                Service: 3:00PM
                            </p>
                        </div>
                    </div>
                    
                    <div className="event">
                        <div className="reception-event">
                            <div className="information info-rec">
                                <h2>Reception</h2>
                                <h3>Walker Homestead</h3>
                            </div>
                        </div>
                        <div>
                            <p>
                                <a href="https://www.google.com/maps/place/Walker+Homestead/@41.6522183,-91.6598851,17z/data=!3m1!4b1!4m5!3m4!1s0x87e446157bbd2477:0x48ca5efd2061a638!8m2!3d41.6522183!4d-91.6576964" target="_blank" rel="noreferrer" >
                                    3867 James Ave SW, Iowa City, IA 52246
                                </a><br />
                                August 21st, 2021<br />
                                Cocktail Hour: 5:00 PM
                                Dinner/Reception: ?:?? PM - 11:00PM
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Events;