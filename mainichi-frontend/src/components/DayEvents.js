import React from 'react';
import EventsTable from './EventsTable';

class DayEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  eventSubmit = (e) => {
    e.preventDefault();

    fetch( 'http://localhost:3001/api/event/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: this.props.newEvent,
        date: this.props.date_formatted
      })
    }).then(response => response.json())
    .then(data => {
      if (alert('Event added.')) {
      } else {
        window.location.reload();
      }
    })
    .catch(error => {
      alert(error);
    });
  }

  render(){
    return (
      <form onSubmit={this.eventSubmit}>
        <h2 className='section-header'>Events</h2>
        <EventsTable date_formatted={this.props.date_formatted} events={this.props.events}/>
        <h3 className='subsec-header'>Add new event:</h3>
        <span className='footnote'>Create a new event by filling out the info below.</span>
        <div>
          <label htmlFor='event-name'>Event name: </label>
          <input 
            className='text-input'
            value={this.props.newEvent}
            onChange={e => this.props.updateEvent(e)}
            type='text' 
            id='event-name' 
            name='event-name' 
            maxLength='100' 
            size='50'
            required
          />   
        </div>
        <input type='submit' value='Submit' className='submit-button'/>
      </form>
    );
  }
}

export default DayEvents;