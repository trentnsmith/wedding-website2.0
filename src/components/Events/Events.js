import React, { Component } from 'react';
import './Events.css';

import Church from '../images/places/church.jpg';
import Walker from '../images/places/walker.JPG';

class Events extends Component {
    render() { 
        return (
            <section>   
                <div>
                    <h1>Events</h1>
                </div>
                <div className="container-events"> 
                    <div className="event wedding-event">
                        <div className="image-block">
                            <img src={Church} alt="St Marys Img"/>
                        </div>
                        <h2>Wedding</h2>
                        <h3>St. Mary's Catholic Church</h3>
                        <p>
                            <a href="https://www.google.com/maps/place/St+Mary's+Church/@41.6618196,-91.5325301,17.27z/data=!4m5!3m4!1s0x87e441f0444cad4b:0xef7278d071e93764!8m2!3d41.6627652!4d-91.5319368" target="_blank">
                                228 E Jefferson St, Iowa City, IA 52245
                            </a><br />
                            August 21st, 2021<br />
                            Ceremy: 3:oo PM
                        </p>
                    </div>

                    <div className="event reception-event">
                    <div className="image-block">
                            <img src={Walker} alt="Walker Homestead Img"/>
                        </div>
                        <h2>Reception</h2>
                        <h3>Walker Homestead</h3>
                        <p>
                            <a href="https://www.google.com/maps/place/Walker+Homestead/@41.6522183,-91.6598851,17z/data=!3m1!4b1!4m5!3m4!1s0x87e446157bbd2477:0x48ca5efd2061a638!8m2!3d41.6522183!4d-91.6576964" target="_blank">
                                3867 James Ave SW, Iowa City, IA 52246
                            </a><br />
                            August 21st, 2021<br />
                            Cocktail Hour: 5:00 PM
                            Dinner/Reception: ?:?? PM - 11:00PM
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Events;