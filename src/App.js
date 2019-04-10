import React, { Component } from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PriceCard from "./components/PriceCard"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <main>
          <PriceCard />
        </main>

        {/* <Footer /> */}


      </div>
    );
  }
}

export default App;
