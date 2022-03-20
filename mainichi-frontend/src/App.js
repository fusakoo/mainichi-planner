import React from 'react';
import Calendar from './components/Calendar';
import Navigation from './components/Navigation';
import { FaGithub } from 'react-icons/fa';

import Home from './components/Home';
import Help from './components/Help';
import Setting from './components/Setting';
import ChangeLog from './components/ChangeLog';
import IconList from './components/IconList';

import logPath from './markdown/changelog.md';
import qaPath from './markdown/qa.md';

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
      iana: localStorage.getItem('iana') || Intl.DateTimeFormat().resolvedOptions().timeZone,
      theme: localStorage.getItem('theme') || 'light',
      dataIsLoaded: false,
      logs: null,
      qaText: null
    };

    this.setIana = this.setIana.bind(this);
    this.displayLog = this.displayLog.bind(this);
    this.displayDayUI = this.displayDayUI.bind(this);
    this.hideDayUI = this.hideDayUI.bind(this);
    this.switchTheme = this.switchTheme.bind(this);
  } 

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentDateTime : addSeconds(this.state.currentDateTime, 1)
      })
    }, 1000)
    // Load the icon data to database
    if(this.state.dataIsLoaded === false){
      this.loadLogs()
      this.loadQA()
      this.loadIcons(IconList)
      this.setState({
        dataIsLoaded: !this.state.dataIsLoaded
      })
    }
  }

  loadQA() {
    fetch(qaPath)
    .then(response => response.text())
    .then((text) => {
      this.setState({
        qaText: text
      })
    })
  }

  loadLogs() {
    fetch(logPath)
    .then(response => response.text())
    .then((text) => {
      this.setState({
        logs: text
      })
    })
  }

  loadIcons = IconList => {
    for (var i in IconList) {
      fetch( 'http://localhost:3001/api/icon/' + IconList[i], {
        method: 'POST'
      })
      .then(response => response.json())
      .catch(error => {
        alert(error);
      });
    }
  }

  setIana = newIana => {
    localStorage.setItem('iana', newIana)
    this.setState({
      iana: newIana,
    });
  }

  displayLog() {
    this.setState(() => ({
      showLog: !this.state.showLog,
    }));
  }

  displayDayUI() {
    this.setState(() => ({
      showSelectedDate: true,
    }));
  }

  hideDayUI() {
    this.setState(() => ({
      showSelectedDate: false,
    }));
  }

  switchTheme = newTheme => {
    localStorage.setItem('theme', newTheme)
    this.setState({
      theme: newTheme,
    })
  }

  render() {
    return (
      <div className='app' data-theme={this.state.theme}>
        <header>
          <div id='logo'>
            <span className='material-icon'>event</span>
            <span>Mainichi Planner</span>
          </div>
          <Navigation hideDayUI={this.hideDayUI}/>
        </header>
        <main>
          <Calendar displayDayUI={this.displayDayUI} {...this.state}/>
          <div>
            <Routes>
              <Route exact path='/' element={<Home logs={this.state.logs}/>}/>
              <Route path='/help' element={<Help qaText={this.state.qaText}/>}/>
              <Route path='/setting' element={<Setting setIana={this.setIana} currentDateTime={this.state.currentDateTime} switchTheme={this.switchTheme}/>}/>
            </Routes>
          </div>
        </main>
        <footer>
            <span>Created by <a href='https://github.com/fusakoo' target='_blank' rel='noreferrer'><FaGithub /> fusakoo</a> | </span>
            <button className='link-button' onClick={this.displayLog}>Change Log</button>
            { this.state.showLog ? <ChangeLog displayLog = {this.displayLog} logs={this.state.logs}/> : null }
        </footer>
      </div>
    );
  }
}

export default App;
