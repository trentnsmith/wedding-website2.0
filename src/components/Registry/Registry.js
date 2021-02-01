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
                    <p>Check back after you receive the formal inivation!</p>
                </div>
                <div className="reg-container">
                    <div className="reg reg-target">
                        <img className="img-target" src={Target} alt="Target Registry" />
                    </div>
                    <div className="reg reg-cb">
                        <img className="img-cb" src={CB} alt="CrateAndBarrel Registry" />
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Registry;