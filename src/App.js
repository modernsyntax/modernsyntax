import React, { Component } from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PriceCard from "./components/PriceCard";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";

import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#118DCD',
      contrastText: '#fff'
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <main>
          <PriceCard />
          <Portfolio />
          <Team />
        </main>

        <Footer />
      
      </div>
      </MuiThemeProvider>


    );
  }
}

export default App;
