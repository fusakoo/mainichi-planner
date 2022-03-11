import React from 'react';
import { format, addDays, addMonths, subMonths, startOfWeek, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay } from 'date-fns';
import Day from './Day';
import Today from './Today';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: this.props.currentDateTime,
      selectedDate: new Date()
    };
  } 

  renderHeader() {
    const dateFormat = 'MMMM yyyy';

    return (
      <div className='header row flex-middle'>
        <div className='col col-start'>
          <div className='material-icon' onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className='col col-center'>
          <span>
            {format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className='col col-end' onClick={this.nextMonth}>
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

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = start;i < end;i++) {
      days.push(
        <div className='col col-center' key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className='days row'>{days}</div>
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
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
                `col cell ${
                  !isSameMonth(day, monthStart)
                    ? 'disabled'
                    : isSameDay(day, selectedDate) ? 'selected' : ''
                }`}
               key = {day}   
               onClick = { () => {this.onDateClick(cloneDay); this.props.displayDay()}}        
            >
              <span className='number'>{formattedDate}</span>
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
  
  onDateClick = day => {
    this.setState({
      selectedDate: day,
    });
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
      selectedDate: new Date()
    });
  }
  
  setImportant() {
    this.setState(() => ({
      important: !this.state.important,
    }));
  }

  render () {
    return (
      <>
        <div className='calendar-container'>
          <Today currentDateTime={this.props.currentDateTime} iana={this.props.iana}/>
          <div>
            <button className='select-today' onClick={() => {this.selectToday(); this.props.displayDay()}}>Today</button>
          </div>
          <div className='calendar'>
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </div>
        </div>
        {this.props.showSelectedDate? <Day date={this.state.selectedDate}/> : null}
      </>
    )
  }
}

export default Calendar;