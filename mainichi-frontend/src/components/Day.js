import React from 'react';
import { format } from 'date-fns';
import EventsTable from './EventsTable';
import Icons from './Icons';

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFrequency: false,
      newEvent: '',
      newNote: this.props.note
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
        eventName: this.state.newEvent,
        date: this.props.date_formatted
      })
    }).then(response => response.json())
    .then(data => {
      if (alert("Event added.")) {
      } else {
        window.location.reload();
      }
    })
    .catch(error => {
      alert(error);
    });
  }

  noteSubmit = (e) => {
    e.preventDefault();

    fetch( 'http://localhost:3001/api/date/note/' + this.props.date_formatted, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        note: this.state.newNote
      })
    }).then(response => response.json())
    .then(data => {
      if (alert("Note updated.")) {
      } else {
        window.location.reload();
      }
    })
    .catch(error => {
      alert(error);
    });
  }

  displayFrequency = event => {
    if (event.target.value && typeof event.target.value === "string") {
      if (event.target.value.toLowerCase() === "true") {
        this.setState(() => ({
          showFrequency: true
        }));
      }
      if (event.target.value.toLowerCase() === "false") {
        this.setState(() => ({
          showFrequency: false
        }));
      }
    }
  }

  render() {
    return (
      <>
        <div className='day-container'>
          <h1 className='page-header'>{format(this.props.date, 'MMMM dd, yyyy (EEEE)')}</h1>
          <div className='day-content'>
            <div>
              <input 
                type="checkbox" 
                id="important" 
                name="important" 
                value="important"
              />
              <label htmlFor="important" className='bold'>Mark day as important  </label> 
              <span className='footnote'>(This will add a red box around the date)</span>
            </div>
            <Icons updateIcons={this.props.updateIcons} icons={this.props.icons} selectedIcons={this.props.selectedIcons} date_formatted={this.props.date_formatted}/>
            <hr/>
            <form onSubmit={this.eventSubmit}>
              <h2 className='section-header'>Events</h2>
              <EventsTable date_formatted={this.props.date_formatted} events={this.props.events}/>
              <h3 className='subsec-header'>Add new event:</h3>
              <span className='footnote'>Create a new event by filling out the info below.</span>
              {/* <span className='footnote'>Create a new event by filling out the info below. Recurrence is set to No by default. Click submit to save the new event.</span> */}
              <div>
                <label htmlFor='event-name'>Event name: </label>
                <input 
                  value={this.state.newEvent}
                  onChange={e => this.setState({ newEvent: e.target.value })}
                  type='text' 
                  id='event-name' 
                  name='event-name' 
                  maxLength='100' 
                  size='50'
                />   
              </div>
              <input type="submit" value="Submit" className='submit-button'/>
            </form>
            <hr/>
            <form onSubmit={this.noteSubmit}>
              <h2 className='section-header'>Notes</h2>
              <h3 className='subsec-header'>Current note</h3>
              <div className="day-note">{this.props.note}</div>
              <span className='footnote'>Write a note (max: 255 characters) and click submit to save/update.</span>
              <textarea 
                value={this.state.newNote}
                onChange={e => this.setState({ newNote: e.target.value })}
                id='note' 
                name='note' 
                rows='10' 
                cols='20'
                maxLength='254' 
                placeholder='Make any notes here.'
              />
              <input type="submit" value="Save" className='submit-button'/>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Day;