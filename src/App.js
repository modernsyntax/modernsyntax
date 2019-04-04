import React, { Component } from 'react';
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import About from "./components/About";
import Tech from "./components/Tech";


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Nav /> */}

        <main>
          <Hero />
          <Portfolio />
          <Tech />
          <About />
          {/* <Contact /> */}
        </main>

        <Footer />


      </div>
    );
  }
}

export default App;
