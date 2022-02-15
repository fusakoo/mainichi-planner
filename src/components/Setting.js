import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Setting extends React.Component {
  constructor() {
    super();
    this.state = {
      timezone: 'default',
      startOfWeek: 'sunday'
    };
  }

  submit = (e) => {
    e.preventDefault();

    const { timezone, startOfWeek } = this.state

    confirmAlert({
      title: 'Confirm to submit',
      message: 'Would you like to apply the settings?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            alert('Settings applied.');
            if (timezone === 'gmt-8') {
              this.props.resetTime()
            }
            if (timezone === 'gmt-6') {
              this.props.adjustTime('2')
            }
            if (timezone === 'gmt-5') {
              this.props.adjustTime('3')
            }
            if (timezone === 'gmt+9') {
              this.props.adjustTime('17')
            }
        
            this.props.setStartOfWeek(startOfWeek);
          }
        },
        {
          label: 'No',
          onClick: () => alert('Settings not applied.')
        }
      ]
    });
  };

  render() {
    return (
      <>
        <div className='content'>
          <h1 className='page-header'>Setting</h1>
          <form onSubmit={this.submit}>
            <h2 className='section-header'>General Setting</h2>
            <span className='footnote'>Select the changes you'd like to apply.</span>
            <label>Font Size: </label>
            <select id='font-size' name='font-size' defaultValue='medium'>
              <option value='small'>Small</option>
              <option value='medium'>Medium (Default)</option>
              <option value='large'>Large</option>
            </select>
            <label>Start of the Week: </label>
            <select id='start-of-week' name='start-of-week' defaultValue='sunday' onChange={e=> this.setState({startOfWeek: e.target.value})}>
              <option value='sunday'>Sunday (Default)</option>
              <option value='monday'>Monday</option>
            </select>
            <label>Date highlight color: </label>
            <select id='highlight' name='highlight' defaultValue='default'>
              <option value='default'>Default</option>
              <option value='red'>Red</option>
              <option value='blue'>Blue</option>
              <option value='green'>Green</option>
              <option value='black'>Black</option>
            </select>
            <label>Timezone (Microservice feature): </label>
            <select id='timezone' name='timezone' defaultValue='gmt-8' onChange={e => this.setState({timezone: e.target.value})}>
              <option value='gmt-8'>GMT-08:00 (Default)</option>
              <option value='gmt-6'>GMT-06:00</option>
              <option value='gmt-5'>GMT-05:00</option>
              <option value='gmt+9'>GMT+09:00</option>
            </select>
            <h2 className='section-header'>Theme</h2>
            <span className='footnote'>Select the theme you'd like to apply.</span>
            <div className='radio-button'>
              <input type='radio' name='theme' id='default' value='default' defaultChecked></input>
              <label htmlFor='default'>Default</label>
            </div>
            <div className='radio-button'>
              <input type='radio' name='theme' id='themeA' value='themeA'></input>
              <label htmlFor='themeA'>Theme A</label>            
            </div>
            <div className='radio-button'>
              <input type='radio' name='theme' id='themeB' value='themeB'></input>
              <label htmlFor='themeB'>Theme B</label>            
            </div>
            <div className='radio-button'>
              <input type='radio' name='theme' id='themeC' value='themeC'></input>
              <label htmlFor='themeC'>Theme C</label>            
            </div>
            <input type="submit" value="Submit" className='submit-button'/>
          </form>
          <hr/>
          <form id='import-export'>
            <h2 className='section-header'>Import / Export</h2>
            <span className='footnote'>Export your current calendar and import your previous export.</span>
            <div>
              <label htmlFor='import'>Import a calendar: </label>
              <input type='file' id='import'/> 
            </div>
            <input type='submit' value='Import a file' className='submit-button'></input>
          </form>
          <form>
            <label>Export current calendar</label>
            <input type='submit' value='Export'className='submit-button'></input>
          </form>
        </div>
      </>
    );
  }
}

export default Setting;