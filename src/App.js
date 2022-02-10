import React from 'react';
import Calendar from './components/Calendar';
import Navigation from './components/Navigation';
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
        </main>
      </div>
    );
  }
}

export default App;
