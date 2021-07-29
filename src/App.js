import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import OurStory from './components/OurStory/OurStory';
import Events from './components/Events/Events';
import Registry from './components/Registry/Registry';
import WeddingParty from './components/WeddingParty/WeddingParty';
import Footer from './components/Footer/Footer';
import RSVP from './components/RSVP/RSVP';
import Accm from './components/Accommodations/Accm';
import Covid from './components/Covid/covid';
import './App.css';


class App extends Component {
  render () {
    return (
      <main className='App'>
        <Header/>
        <Main />
        <OurStory />
        <Events />
        <Covid />
        <Accm />
        <Registry />
        <WeddingParty />
        <RSVP />
        <Footer />
      </main>
    );
  };
};

export default App;