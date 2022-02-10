import React from 'react';
import Calendar from './components/Calendar';
import Navigation from './components/Navigation';
import { FaGithub } from 'react-icons/fa';

import Home from './components/Home';
import Help from './components/Help';
import Setting from './components/Setting';

import { Route, Routes } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="material-icon">event</span>
            <span>
              Mainichi Planner
            </span>
          </div>
          <Navigation/>
        </header>
        <main>
          <Calendar/>
          <div>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/help" element={<Help/>}/>
              <Route path="/setting" element={<Setting/>}/>
            </Routes>
          </div>
        </main>
        <footer>
            <p>Created by <a href="https://github.com/fusakoo" target="_blank" rel="noreferrer"><FaGithub /> fusakoo</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
