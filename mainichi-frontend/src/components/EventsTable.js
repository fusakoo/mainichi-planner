import React from 'react';
import { format } from 'date-fns';

class EventsTable extends React.Component {
  // Todo: Update with props
  constructor(props) {
    super(props);
    this.state = { 
      eventName: ''
     };
  }

  HandleDelete = (eventName,date) => {
    fetch( 'http://localhost:3001/api/event/' , {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: eventName, 
        date: date
      })
    }).then(response => response.text())
    .then(data => {
      if (alert("Successfully deleted the event.")) {
      } else {
        window.location.reload();
      }
    })
    .catch(error => {
      alert(error);
    });
  }

  render () {
    return (    
      <table className="table-container">
        <caption className="table-header">Existing Event(s):</caption>
        <thead className="table">
          <tr>
            <th className="column event-name column-header">Name</th>
            <th className="column column-header">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.events.map(event => {
            return ( 
              <tr className="list-item">
                <td className="column">{event}</td>
                <td className="column delete-button"><button onClick={() => this.HandleDelete(event,this.props.date_formatted)} className='delete-icon'>X</button></td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    );
  }
}

export default EventsTable;