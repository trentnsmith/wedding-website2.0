import React, { Component } from 'react';

class RSVP extends Component {
    render() { 
        return (
            <section id="rsvpScroll" className="rsvp-section">
                <div>
                    <h1>RSVP</h1>
                </div>
                <div className="updates">
                    <p>Please RSVP by July 14, 2021</p>
                    <p>
                        <a href="https://trent-jean.wedsites.com/rsvp" target="_blank" rel="noreferrer">
                            RSVP Form
                        </a>
                    </p>
                    <p>
                        *If you would like to invite additional people that are not included in the RSVP please reach out to us via email.
                    </p>
                    <p>Trent: trentnsmith@gmail.com</p>
                    <p>Jean: jean.louise.larew.623@gmail.com</p>

                </div>
            </section>
        );
    }
}
 
export default RSVP;