import React from 'react';
import Calendar from './components/Calendar';
import Navigation from './components/Navigation';
import { FaGithub } from 'react-icons/fa';

import Home from './components/Home';
import Help from './components/Help';
import Setting from './components/Setting';
import ChangeLog from './components/ChangeLog';

import { Route, Routes } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLog: false,
      showSelectedDate: false
    };

    this.displayLog = this.displayLog.bind(this);
    this.displayDay = this.displayDay.bind(this);
    this.hideDay = this.hideDay.bind(this);
  } 

  displayLog() {
    this.setState(() => ({
      showLog: !this.state.showLog,
    }));
  }

  displayDay() {
    this.setState(() => ({
      showSelectedDate: true,
    }));
  }

  hideDay() {
    this.setState(() => ({
      showSelectedDate: false,
    }));
  }

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
          <Navigation hideDay = {this.hideDay}/>
        </header>
        <main>
          <Calendar displayDay = {this.displayDay} showSelectedDate = {this.state.showSelectedDate}/>
          <div>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/help' element={<Help/>}/>
              <Route path='/setting' element={<Setting/>}/>
            </Routes>
          </div>
        </main>
        <footer>
            <span>Created by <a href='https://github.com/fusakoo' target='_blank' rel='noreferrer'><FaGithub /> fusakoo</a> | </span>
            <button className='link-button' onClick={this.displayLog}>Change Log</button>
            { this.state.showLog ? <ChangeLog displayLog = {this.displayLog}/> : null }
        </footer>
      </div>
    );
  }
}

export default App;
