import React from 'react';
import Calendar from './components/Calendar';
import Navigation from './components/Navigation';
import { FaGithub } from 'react-icons/fa';

import Home from './components/Home';
import Help from './components/Help';
import Setting from './components/Setting';
import ChangeLog from './components/ChangeLog';
import IconList from './components/IconList';

import { Route, Routes } from 'react-router-dom';
import { addSeconds } from 'date-fns';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLog: false,
      showSelectedDate: false,
      startOfWeek: 'sunday',
      currentDateTime: new Date(),
      iana: Intl.DateTimeFormat().resolvedOptions().timeZone,
      theme: 'light'
    };

    this.setIana = this.setIana.bind(this);
    this.displayLog = this.displayLog.bind(this);
    this.displayDay = this.displayDay.bind(this);
    this.hideDay = this.hideDay.bind(this);
    this.setStartOfWeek = this.setStartOfWeek.bind(this);
    this.switchTheme = this.switchTheme.bind(this);
  } 

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentDateTime : addSeconds(this.state.currentDateTime, 1)
      })
    }, 1000)
    this.ingestIcons(IconList)
  }

  ingestIcons = IconList => {
    for (var i in IconList) {
      fetch( 'http://localhost:3001/api/icon/' + IconList[i], {
        method: 'POST'
      }).then(response => response.json())
      .catch(error => {
        alert(error);
      });
    }
  }

  setIana = newIana => {
    this.setState({
      iana: newIana,
    });
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

  setStartOfWeek = dayOfWeek => {
    this.setState({
      startOfWeek: dayOfWeek,
    });
  }

  switchTheme = newTheme => {
    this.setState({
      theme: newTheme,
    })
  }

  render() {
    return (
      <div className="app" data-theme={this.state.theme}>
        <header>
          <div id="logo">
            <span className="material-icon">event</span>
            <span>
              Mainichi Planner
            </span>
          </div>
          <Navigation hideDay={this.hideDay}/>
        </header>
        <main>
          <Calendar displayDay={this.displayDay} showSelectedDate={this.state.showSelectedDate} startOfWeek={this.state.startOfWeek} currentDateTime={this.state.currentDateTime} iana={this.state.iana}/>
          <div>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/help' element={<Help/>}/>
              <Route path='/setting' element={<Setting setIana={this.setIana} setStartOfWeek={this.setStartOfWeek} currentDateTime={this.state.currentDateTime} switchTheme={this.switchTheme}/>}/>
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
