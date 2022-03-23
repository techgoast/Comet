import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Stats from './components/stats';
import About1 from './components/about1';
import Projects from './components/projects';
import Brands from "./components/brands"
import About2 from './components/about2';
import Blog from './components/blog';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
        <Stats />
        <About1 />
        <Projects />
        <Brands />
        <About2 />
        <Blog />
        <Contact />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
