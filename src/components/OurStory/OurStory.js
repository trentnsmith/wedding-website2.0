import React, { Component } from 'react';
import './OurStory.css';

import FirstPhoto from '../images/story/first.jpg';
import Scriptown from '../images/story/oneyear.jpg';
import Hawaii from '../images/story/hawaiiwaterfall.jpg';
import Engagement from '../images/story/engagement.jpg';


class Story extends Component {
    

    render() { 
       
        return (
            <section className="story-section">
                <div className="story-overlay">
                <h1>Our Story</h1>
                    <div className="story-container">
                        <div className="story-block story-begin">
                            <div className="photo-container">
                                <img className="story-photo first" src={FirstPhoto} alt="Our First" />
                            </div>
                            <div className="story-details">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="story-block story-date">
                            <div className="story-details">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="photo-container">
                                <img className="story-photo first" src={Scriptown} alt="Scriptown" />
                            </div>
                        </div>
                            
                        <div className="story-block story-between">
                            <div className="photo-container">
                                <img className="story-photo first" src={Hawaii} alt="Waterfall" />
                            </div>
                            <div className="story-details">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="story-block story-engagement">
                            <div className="story-details">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="photo-container">
                                <img className="story-photo first" src={Engagement} alt="Engagement" />
                            </div>
                        </div>
                    </div>
                </div>              
            </section>
        );
    }
}
 
export default Story;