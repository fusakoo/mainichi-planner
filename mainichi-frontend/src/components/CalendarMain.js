import React from 'react';
import { format, addDays, startOfWeek, startOfMonth, 
  endOfMonth, endOfWeek, isSameMonth, isSameDay } from 'date-fns';

class CalendarMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  } 

  renderHeader() {
    const dateFormat = 'MMMM yyyy';

    return (
      <div className='header row flex-middle'>
        <div className='col col-start'>
          <div className='material-icon' onClick={this.props.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className='col col-center'>
          <span>
            {format(this.props.currentMonth, dateFormat)}
          </span>
        </div>
        <div className='col col-end' onClick={this.props.nextMonth}>
          <div className='material-icon'>
            chevron_right
          </div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = 'EEEE';
    const days = [];
    let start = 0;
    let end = 7;

    if (this.props.startOfWeek === 'sunday') {
      start = 0;
      end = 7;
    }
    if (this.props.startOfWeek === 'monday') {
      start = 1;
      end = 8;
    }

    let startDate = startOfWeek(this.props.currentMonth);

    for (let i = start;i < end;i++) {
      days.push(
        <div className='col col-center' key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className='days row'>{days}</div>
  }

  onDateClick = day => {
    this.props.onDateClick(day);
  }

  displayDayUI = () => {
    this.props.displayDayUI();
  }  

  renderCells() {
    const { currentMonth, selectedDate } = this.props;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = 'd';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0;i < 7;i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div className = {
                `col cell 
                ${
                  !isSameMonth(day, monthStart)
                    ? 'disabled'
                    : isSameDay(day, selectedDate) ? 'selected' : ''
                }
                ${
                  !isSameDay(day, selectedDate)
                    ? ''
                    : (this.props.important === true) ? 'important-flag' : ''
                }
                `}
               key = {day}   
               onClick = { () => {this.onDateClick(cloneDay); this.displayDayUI()}}        
            >
              <span className='number'>{(formattedDate)}</span>
              {isSameDay(day, selectedDate)? <span className='event-count'>{(this.props.events.length > 0)? this.props.events.length:''}</span>:''}
              {isSameDay(day, selectedDate)? this.renderIcons():''}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className='row' key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className='body'>{rows}</div>
  }

  renderIcons() {
    const iconList = Array.from(this.props.icons);
    let icons = [];
    for(var i in iconList) {
      let iconName = iconList[i];
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

  render () {
    return (
      <div className='calendar'>
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    )
  }
}

export default CalendarMain;