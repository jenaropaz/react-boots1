import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navig from './components/Navig';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a></header>
          <Navig/>
          {/*
          <nav className='navbar navbar-dark navbar-expand-md portfolio-navbar  gradient'>
            <div className='container'>
              <a className='navbar-brand' href='/'>
                <i className='fa fa-star'></i>&nbsp;JCP
              </a>
              <button
                data-toggle='collapse'
                className='navbar-toggler'
                data-target='#navbarNav'
                aria-expanded="true"
              >
                <span className='sr-only'>Toggle navigation</span>
                <span className='navbar-toggler-icon'></span>
              </button>
              <div id='navbarNav' className='collapse navbar-collapse flex-grow-0 content-justify-end' >
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'>
                      <i className='fa fa-home'></i>&nbsp;Home
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link active' href='/about'>
                      <i className='fa fa-male'></i>&nbsp;About
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/login'>
                      <i className='fa fa-heart'></i>&nbsp;Login
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/contact'>
                      <i className='fa fa-keyboard-o'></i>&nbsp;Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        */}

        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />

            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}
