import React, { Component } from 'react';
import './WeddingParty.css';

class WeddingParty extends Component {
    render() { 
        return (
            <section className="wedding-party">
            <div>
                <h1>Wedding Party</h1>
            </div>
            <div className="container-party">
                <div className="party party-bride">
                    <ul>
                        <li>Maid of Honor</li>
                        <li>Bridesmaid</li>
                        <li>Bridesmaid</li>
                        <li>Bridesmaid</li>
                        <li>Bridesmaid</li>
                        <li>Bridesmaid</li>
                        <li>Bridesmaid</li>
                    </ul>
                </div>
                <div className="party party-groom">
                    <ul>
                        <li>Best Man</li>
                        <li>Groomsman</li>
                        <li>Groomsman</li>
                        <li>Groomsman</li>
                        <li>Groomsman</li>
                        <li>Groomsman</li>
                        <li>Groomsman</li>
                    </ul>
                </div>
            </div>
            </section>
        );
    }
}
 
export default WeddingParty;