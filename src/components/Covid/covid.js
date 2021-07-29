import React, { Component } from 'react';
import './covid.css';

class Covid extends Component {
    render() {
        return (
            <div className="covid">
                <h1>COVID19 Update</h1>
                <div className="covid_container">
                    <p className="covid_pg">
                        We are thankful that the pandemic has eased and that we are able to gather for this wedding.
                        Because the pandemic has not gone away and because of the ongoing risks posed by the virus
                        and the contagiousness of the current variants, we remain concerned, particularly about the
                        health of the older members of our friends and family. We ask that all unvaccinated individuals
                        wear a mask at all times during indoor events and that we all use hand sanitizer frequently. We
                        will provide masks and hand sanitizer at all of the events. Thank you for your efforts to keep all
                        of us safe and healthy!!
                    </p>
                </div>
            </div>
        )
    };
};

export default Covid;