import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import Services from './services/Services';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

class App extends Component {

  render() {
      return (
          <Fragment>

              <Header />

              <main className="my-0 pt-0 pb-4">

                  <Row noGutters className="row-info pt-md-4 w-100 px-4 px-xl-0 position-relative">
                      <Col className="page-info d-flex align-items-center justify-content-center">
                          <span className="align-middle">Анализ флюорограмм</span>
                      </Col>
                  </Row>

                  <Services />

              </main>

              <Footer />

              <style>
                  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
              </style>

          </Fragment>
        )}
}

export default App;
