import React from 'react';
import './App.css';

import Home from './pages/Home';
import Help from './pages/Help';
import Setting from './pages/Setting';

import Calendar from './components/Calendar/Calendar';
import Header from './components/Header';
import Footer from './components/Footer';

import IconList from './components/IconList';

import logPath from './markdown/changelog.md';
import qaPath from './markdown/qa.md';
import feedbackPath from './markdown/feedback.md';

import { Route, Routes } from 'react-router-dom';
import { addSeconds } from 'date-fns';

class App extends React.Component {
  /* 
    Main React app. Handles the rendering and also loads (fetches) any data that 
    is needed by the web app and stores it to its state.
    Child components: Header, Calendar, Footer
    Routes (renders depending on the url endpoint): Home, Help, Setting
  */
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
      qaText: null,
      feedbackText: null
    };
    this.setIana = this.setIana.bind(this);
    this.displayLog = this.displayLog.bind(this);
    this.displayDayUI = this.displayDayUI.bind(this);
    this.hideDayUI = this.hideDayUI.bind(this);
    this.switchTheme = this.switchTheme.bind(this);
  } 

  componentDidMount() {
    // Updates the clock each second
    setInterval(() => {
      this.setState({
        currentDateTime : addSeconds(this.state.currentDateTime, 1)
      })
    }, 1000)
    // Load various data to state, and limit the loading to once
    if(this.state.dataIsLoaded === false){
      this.loadLogs()
      this.loadQA()
      this.loadFeedback()
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

  loadFeedback() {
    fetch(feedbackPath)
    .then(response => response.text())
    .then((text) => {
      this.setState({
        feedbackText: text
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
      fetch( process.env.REACT_APP_BACKEND_URL + '/api/icon/' + IconList[i], {
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
        <Header hideDayUI={this.hideDayUI}/>
        <main>
          <Calendar 
            displayDayUI={this.displayDayUI} 
            {...this.state}
          />
          <div>
            <Routes>
              <Route 
                exact 
                path='/' 
                element={<Home logs={this.state.logs}/>}
              />
              <Route 
                path='/help' 
                element={
                  <Help 
                    qaText={this.state.qaText} 
                    feedbackText={this.state.feedbackText}
                  />
                }
              />
              <Route 
                path='/setting' 
                element={
                  <Setting 
                    setIana={this.setIana} 
                    iana={this.state.iana}
                    currentDateTime={this.state.currentDateTime} 
                    switchTheme={this.switchTheme}
                  />
                }
              />
            </Routes>
          </div>
        </main>
        <Footer 
          displayLog={this.displayLog} 
          showLog={this.state.showLog} 
          logs={this.state.logs}
        />
      </div>
    );
  }
}

export default App;
