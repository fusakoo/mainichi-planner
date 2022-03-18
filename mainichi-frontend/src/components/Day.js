import React from 'react';
import { format } from 'date-fns';
import { 
  FaFlag, FaThumbsUp, FaThumbsDown, FaLaughBeam, FaLaugh, FaMeh, FaFrown, 
  FaSun, FaCloud, FaCloudSun, FaCloudRain, 
  FaPlane, FaShip, FaRunning, FaShoppingCart, FaPray,
  FaTooth, FaTheaterMasks, FaWineGlassAlt, FaUtensils, FaUmbrellaBeach, FaUserMd,
  FaTicketAlt, FaSpa, FaSnowboarding, FaSkiing, FaFutbol,
  FaRobot, FaPrescription, FaPizzaSlice, FaPhoneAlt, FaGasPump, FaMitten, FaLaptop,
  FaHotTub, FaHome, FaHiking, FaHeart, FaFish, FaDog, FaCat, FaCoffee, FaCity, FaCocktail,
  FaCampground, FaBabyCarriage, FaBicycle, FaBook, FaTrain
} from 'react-icons/fa';
import EventsTable from './EventsTable';

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFrequency: false,
      newEvent: '',
      newNote: this.props.note
    }
  }

  // componentDidMount() {
  //   fetch("https://icon-depot.herokuapp.com/icons-available", {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         'mode': 'cors'
  //       }
  //   }).then(response => response.json())
  //   .then(data => console.log(data['icons'])
  //     )
  //     // .then(
  //     //   (result) => {
  //     //     this.setState({
  //     //       timezones: res
  //     //     });
  //     //   },
  //     //   (error) => {
  //     //     this.setState({
  //     //       error
  //     //     });
  //     //   }
  //     // )
  //   }

  submit = (e) => {
    e.preventDefault();
    alert('Change saved.');
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
            <form onSubmit={this.submit}>
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
              <h2 className='section-header'>Icons</h2>
              <span className='footnote'>Select up to 4 icons to display on calendar</span>
              <div className='icon-list'>
                <FaFlag className='icon'/>
                <FaThumbsUp className='icon'/>
                <FaThumbsDown className='icon'/>
                <FaLaughBeam className='icon'/>
                <FaLaugh className='icon'/>
                <FaMeh className='icon'/>
                <FaFrown className='icon'/>
                <FaSun className='icon'/>
                <FaCloud className='icon'/>
                <FaCloudSun className='icon'/>
                <FaCloudRain className='icon'/>
                <FaShip className='icon'/>
                <FaPlane className='icon'/>
                <FaTrain className='icon'/>
                <FaRunning className='icon'/>
                <FaHiking className='icon'/>
                <FaSkiing className='icon'/>
                <FaSnowboarding className='icon'/>
                <FaFutbol className='icon'/>
                <FaBicycle className='icon'/>
                <FaPray className='icon'/>
                <FaShoppingCart className='icon'/>
                <FaTheaterMasks className='icon'/>
                <FaTicketAlt className='icon'/>
                <FaHotTub className='icon'/>
                <FaSpa className='icon'/>
                <FaUtensils className='icon'/>
                <FaPizzaSlice className='icon'/>
                <FaMitten className='icon'/>
                <FaCoffee className='icon'/>
                <FaWineGlassAlt className='icon'/>
                <FaCocktail className='icon'/>
                <FaUmbrellaBeach className='icon'/>
                <FaUserMd className='icon'/>
                <FaPrescription className='icon'/>
                <FaTooth className='icon'/>
                <FaRobot className='icon'/>
                <FaPhoneAlt className='icon'/>
                <FaLaptop className='icon'/>
                <FaGasPump className='icon'/>
                <FaHome className='icon'/>
                <FaCity className='icon'/>
                <FaCampground className='icon'/>
                <FaBabyCarriage className='icon'/>
                <FaBook className='icon'/>
                <FaFish className='icon'/>
                <FaCat className='icon'/>
                <FaDog className='icon'/>
                <FaHeart className='icon'/>
              </div>
            </form>
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