import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import DayUI from '../DayOverlay/DayUI';
import DayOverview from '../DayOverlay/DayOverview';
import CalendarMain from './CalendarMain';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: this.props.currentDateTime,
      selectedDate: new Date(),
      date_formatted: format(new Date(), 'yyyy-MM-dd'),
      note: '',
      important: false,
      icons: new Set(),
      selectedIcons: new Set(),
      events: []
    };
    this.updateIcons = this.updateIcons.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
  } 

  renderIcons() {
    const iconList = Array.from(this.state.icons);
    let icons = [];
    for(var i in iconList) {
      let iconName = iconList[i]
      icons.push(
        <span
          className = 'mini-icon material-icons'
          value = {iconName}>
          {iconName}
        </span>
      )
    }
    return <div className='mini-icon-container'>{icons}</div>
  }
  
  fetchDate = day => {
    fetch( 'http://localhost:3001/api/date/' + format(day,'yyyy-MM-dd') , {
      method: 'GET'
    }).then(response => response.text())
    .then(data => {
      var json = JSON.parse(data);
      this.setState({
        note: json.note,
        important: json.important
      })
    })
    .catch(error => {
      alert(error);
    });
  }

  fetchIcons = day => {
    fetch( 'http://localhost:3001/api/icon/' + format(day,'yyyy-MM-dd') , {
      method: 'GET'
    }).then(response => response.text())
    .then(data => {
      var json = JSON.parse(data);
      var icons = []
      for (var row in json) {
        icons.push(json[row].iconName)
      }
      this.setState({
        icons: new Set(icons),
        selectedIcons: new Set(icons)
      })
    })
    .catch(error => {
      alert(error);
    });
  }

  fetchEvents = day => {
    fetch( 'http://localhost:3001/api/event/' + format(day,'yyyy-MM-dd') , {
      method: 'GET'
    }).then(response => response.text())
    .then(data => {
      var json = JSON.parse(data);
      var events = []
      for (var row in json) {
        events.push(json[row].eventName)
      }
      this.setState({
        events: events
      })
    })
    .catch(error => {
      alert(error);
    });
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day,
      date_formatted: format(day, 'yyyy-MM-dd')
    })
    this.fetchDate(day);
    this.fetchIcons(day);
    this.fetchEvents(day);
  }

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  }
  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  }

  selectToday = () => {
    this.setState({
      selectedDate: new Date(),
      date_formatted: format(new Date(), 'yyyy-MM-dd'),
      currentMonth: new Date()
    });
    this.fetchDate(new Date());
    this.fetchIcons(new Date());
    this.fetchEvents(new Date());
  }
  
  setImportant() {
    this.setState(() => ({
      important: !this.state.important,
    }));
  }

  updateIcons = icon => {
    var currIcons = this.state.selectedIcons;
    if (currIcons.has(icon)){
      currIcons.delete(icon)
      this.setState({
        selectedIcons: currIcons
      })
    } else {
      if (currIcons.size < 4){
        currIcons.add(icon)
        this.setState({
          selectedIcons: currIcons
        })
      }
    }
  }

  displayDayUI = () => {
    this.props.displayDayUI();
  }  

  render () {
    return (
      <>
        <div className='calendar-container'>
          <DayOverview 
            currentDateTime={this.props.currentDateTime} 
            iana={this.props.iana}
          />
          <div>
            <button 
              className='select-today' 
              onClick={() => {this.selectToday(); this.displayDayUI()}}
            >Today</button>
          </div>
          <CalendarMain 
            displayDayUI={this.displayDayUI} 
            onDateClick={this.onDateClick} 
            nextMonth={this.nextMonth} 
            prevMonth={this.prevMonth} 
            startOfWeek={this.props.startOfWeek} 
            {...this.state}
          />
        </div>
        {this.props.showSelectedDate
          ? <DayUI 
              updateIcons={this.updateIcons} 
              // Cannot use {...this.state} to shorten here as it causes some mounting issue
              date={this.state.selectedDate} 
              date_formatted={this.state.date_formatted} 
              note={this.state.note} 
              important={this.state.important} 
              icons={this.state.icons} 
              selectedIcons={this.state.selectedIcons} 
              events={this.state.events}
            /> 
          : ''}
      </>
    )
  }
}

export default Calendar;