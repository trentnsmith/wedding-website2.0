import React, { Component } from 'react';
import './Registry.css';

import CB from '../images/places/candblogo.jpg';
import Target from '../images/places/retailers-target-logo.png';

class Registry extends Component {
    render() { 
        return (
            <section className="reg-section" id="registryScroll">
                <h1>Registry</h1>
                <div className="updates">
                    {/* <p>Check back after you receive the formal inivation!</p> */}
                </div>
                <div className="reg-container">
                    <div className="reg reg-target">
                        <a target="_blank" rel="noreferrer" href="https://www.target.com/gift-registry/giftgiver?registryId=0925b38b3b74421bb9cf61b7ff4678fb&type=WEDDING">
                        <img className="img-target" src={Target} alt="Target Registry" />
                        </a>
                    </div>
                    <div className="reg reg-cb">
                        <a target="_blank" rel="noreferrer" href="https://www.crateandbarrel.com/gift-registry/jean-louise-larew-and-trent-smith/r6219242" >
                        <img className="img-cb" src={CB} alt="CrateAndBarrel Registry" />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Registry;