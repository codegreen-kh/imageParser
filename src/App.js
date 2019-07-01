import React, { Component } from 'react';
import './App.css';
import Services from './services/Services';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

class App extends Component {

  render() {
      return (
        <div className="App">
            <Header />
            <div className="page-info">
              <span>Анализ флюорограмм</span>
            </div>
            <Services />
            <Footer />
            <style>
              @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
            </style>
        </div>
      )
    }
}

export default App;
