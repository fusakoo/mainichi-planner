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

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFrequency: false
    }
  }

  submit = (e) => {
    e.preventDefault();
    alert('Change saved.');
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
                <input type="checkbox" id="important" name="important" value="important"/>
                <label for="important" className='bold'>Mark day as important  </label> 
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
            <form onSubmit={this.submit}>
              <h2 className='section-header'>Events</h2>
              <h3 className='subsec-header'>Existing event(s):</h3>
              <div className='event-list'>
                <div className='event'>
                  <span>Test Event 1</span>
                  <button className='delete-button'>X</button>
                </div>
                <div className='event'>
                  <span>Test Event 2</span>
                  <button className='delete-button'>X</button>
                </div>            
              </div>
              <h3 className='subsec-header'>Add new event:</h3>
              <span className='footnote'>Create a new event by filling out the info below. Recurrence is set to No by default. Click submit to save the new event.</span>
              <div>
                <label for='event-name'>Event name: </label>
                <input type='text' id='event-name' name='event-name' maxlength='100' size='50'/>   
              </div>
              <div className='recurrence-container'>
                <div className='radio-button events-radio'>
                  <h3 className='subsec-header'>Recurring:</h3>
                  <input type='radio' name='recurring' id='false' value={false} onClick={e => this.displayFrequency(e)} defaultChecked></input>
                  <label htmlFor='false'>No</label>
                  <input type='radio' name='recurring' id='true' value={true} onClick={e => this.displayFrequency(e)}></input>
                  <label htmlFor='true'>Yes</label>
                </div>
                {this.state.showFrequency?
                  <div className='radio-button events-radio frequency-container'>
                    <h3 className='subsec-header'>Frequency:</h3>
                    <input type='radio' name='frequency' id='daily' value='daily'></input>
                    <label htmlFor='daily'>Daily</label>
                    <input type='radio' name='frequency' id='weekly' value='weekly'></input>
                    <label htmlFor='weekly'>Weekly</label>
                    <input type='radio' name='frequency' id='monthly' value='monthly'></input>
                    <label htmlFor='monthly'>Monthly</label>
                    <input type='radio' name='frequency' id='yearly' value='yearly'></input>
                    <label htmlFor='yearly'>Yearly</label>
                  </div>
                : null}
              </div>
              <input type="submit" value="Submit" className='submit-button'/>
            </form>
            <hr/>
            <form onSubmit={this.submit}>
              <h2 className='section-header'>Notes</h2>
              <span className='footnote'>Write a quick note and click Submit to save.</span>
              <textarea id='note' name='note' rows='10' cols='20' placeholder='Make any notes here.'></textarea>
              <input type="submit" value="Save" className='submit-button'/>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Day;