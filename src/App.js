import React, { Component } from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PriceCard from "./components/PriceCard"
import Portfolio from "./components/Portfolio"
import Team from "./components/Team"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="clip">&nbsp;</div>
        <div className="clip2">&nbsp;</div>
        <main>
          <PriceCard />
          <Portfolio />
          <Team />
        </main>

        <Footer />


      </div>
    );
  }
}

export default App;
