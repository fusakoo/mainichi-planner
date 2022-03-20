import React from 'react';
import { format } from 'date-fns';

import DayIcons from './DayIcons';
import DayEvents from './DayEvents';
import DayImportant from './DayImportant';
import DayNotes from './DayNotes';

class DayUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFrequency: false,
      newEvent: '',
      newNote: this.props.note,
      newImportance: false
    }
    this.updateImportance = this.updateImportance.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  updateImportance = (e) => {
    this.setState({ 
      newImportance: e.target.value 
    });
  }

  updateEvent = e => {
    this.setState({ 
      newEvent: e.target.value 
    });
  }

  updateNote = (e) => {
    this.setState({ 
      newNote: e.target.value 
    });
  }

  render() {
    return (
      <>
        <div className='day-container'>
          <h1 className='page-header'>{format(this.props.date, 'MMMM dd, yyyy (EEEE)')}</h1>
          <div className='day-content'>
            <DayImportant updateImportance={this.updateImportance} newImportance={this.state.newImportance} date_formatted={this.props.date_formatted}/>
            <hr/>
            <DayIcons updateIcons={this.props.updateIcons} {...this.props}/>
            <hr/>
            <DayEvents updateEvent={this.updateEvent} date_formatted={this.props.date_formatted} events={this.props.events} newEvent={this.state.newEvent}/>
            <hr/>
            <DayNotes updateNote={this.updateNote} note={this.props.note} newNote={this.state.newNote} date_formatted={this.props.date_formatted}/>
          </div>
        </div>
      </>
    );
  }
}

export default DayUI;