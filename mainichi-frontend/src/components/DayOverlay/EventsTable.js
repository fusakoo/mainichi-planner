import React from 'react';
import { confirmAlert } from 'react-confirm-alert';

class EventsTable extends React.Component {
  /* 
    Component for rendering DayEvents section's table for events for the day
  */
  constructor(props) {
    super(props);
    this.state = { 
      eventName: ''
     };
  }

  HandleDelete = (eventName,date) => {
    confirmAlert({
      title: 'Confirm to apply',
      message: 'Would you like to delete the selected event?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            fetch( process.env.REACT_APP_BACKEND_URL + '/api/event/' , {
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
              if (alert('Event deleted.')) {
              } else {
                window.location.reload();
              }
            })
            .catch(error => {
              alert(error);
            });             
          }
        },
        {
          label: 'No',
          onClick: () => alert('Action has been cancelled.')
        }
      ]
    });
  }

  render () {
    return (    
      <table className='table-container'>
        <caption className='table-header'>Existing Event(s)</caption>
        <thead className='table'>
          <tr>
            <th className='column event-name column-header'>Name</th>
            <th className='column column-header'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.events.map(event => {
            return ( 
              <tr className='list-item'>
                <td className='column'>{event}</td>
                <td className='column delete-button'>
                  <button 
                    onClick={() => this.HandleDelete(event,this.props.date_formatted)} 
                    className='delete-icon'
                  >X</button>
                </td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    );
  }
}

export default EventsTable;