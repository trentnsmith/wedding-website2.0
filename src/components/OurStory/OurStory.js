import React, { Component } from 'react';
import './OurStory.css';

import FirstPhoto from '../images/story/first.jpg';
import Scriptown from '../images/story/oneyear.jpg';
import Hawaii from '../images/story/hawaiiwaterfall.jpg';
import Engagement from '../images/story/engagement.jpg';


class Story extends Component {
    

    render() { 
       
        return (
            <section className="story-section" id="ourStoryScroll">
                <div className="story-overlay">
                <h1>Our Story</h1>
                    <div className="story-container">
                        <div className="story-block story-begin">
                            <div className="photo-container">
                                <img className="story-photo first" src={FirstPhoto} alt="Our First" />
                            </div>
                            <div className="story-details">
                                <h2>How We Met… A Broken Phone Brings People Together</h2>
                                <p>Summer 2018. What started out as a normal day for Jean, 
                                ended up being a stressful one when her phone would not 
                                turn on!  After her workout she stopped by the Sprint 
                                store for help.  Trent, a manager at the Sprint store,
                                noticed a cute girl who was next in line; he had to make 
                                sure he had a chance to talk to her.  When Jean heard her
                                name called, she thought, “Oh, hello cute guy.”  For the 
                                next hour, they conversed and attempted to avoid some strange
                                customers (this is not uncommon at a Sprint store).  
                                When Jean finally had a working phone, Trent gave Jean
                                his business card… “Give me a call if there’s anything 
                                you need,” he said.  Usually, a broken cell phone is not 
                                the highlight of one’s day, but for Jean she ended up
                                meeting a handsome devil named Trent.</p>
                            </div>
                        </div>

                        <div className="story-block story-date">
                            <div className="story-details">
                                <h2>Our First Date… Scriptown</h2>
                                <p>A few days after they met, Trent decided not to wait for 
                                Jean to call him and took matters into his own hands.  
                                Why not “shoot your shot?!”  While Jean was busy trying
                                to come up with an excuse to go back to the Sprint store,
                                Trent sent her a funny text about all the interesting 
                                characters they both witnessed on the night they met. 
                                What a happy surprise! A week later, they met for a drink
                                at Scriptown Brewery.</p>
                                <p>Jean – “Honestly, my first thought was-he is SO CUTE!! 
                                I loved the way that he spoke about his family and his 
                                plans for the future. I loved his honesty and his confidence
                                to be himself.”</p>
                                <p>Trent “I knew early on that Jean was different, and in a good way. 
                                She knew what she wanted, she was driven, she really valued 
                                family, and she thought I was funny so that was definitely a
                                plus.  There was no question I wanted to see her again.”</p>
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
                                <h2>In Between… Trips and More Trips</h2>
                                <p>Over the last 2.5 years, we have grown and built our lives
                                together. We have had the opportunity to travel throughout
                                the country, often to see friends and family, from New Jersey
                                to Hawaii (and a few others in between!). We revel in any 
                                time we get to spend with our families-visiting Jean’s family 
                                in Chicago, Minnesota, California, and Iowa City and celebrating
                                holidays and birthdays with Trent’s family here in Nebraska.
                                We love to stay active and enjoy hiking locally and try to 
                                incorporate outdoor activities into our travels as much as
                                possible-even if that means wine/beer tasting on an outdoor
                                patio.</p>
                            </div>
                        </div>

                        <div className="story-block story-engagement">
                            <div className="story-details">
                                <h2>The Engagement…She Said Yes</h2>
                                <p>After two years of dating, we planned a trip to South Dakota.  
                                I (Trent) had never been to Mount Rushmore or the Black Hills.
                                Hotels just aren’t the way to experience the Black Hills;
                                we opted for the less rugged version of traditional camping
                                aka glamping. During the days leading up to our departure
                                (including our drive), I researched every hike in the area.
                                Jean had no idea I was in search of the highest elevation
                                East of the Rocky Mountains as the scene for a memorable
                                moment. On our second day in South Dakota, we summited 
                                Black Elk Peak.  When we reached the top, Jean had no
                                idea why I could not sit still and enjoy the view; she 
                                didn’t know I was looking for the perfect, photogenic 
                                spot.  After quickly locating (and hiring) our soon to
                                be engagement photographer to take a few pictures for
                                us, I reached into my backpack, turned around, and
                                got down on one knee. The rest is history. </p>
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