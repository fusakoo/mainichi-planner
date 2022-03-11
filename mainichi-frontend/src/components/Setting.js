import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      timezone: null,
      startOfWeek: 'sunday',
      timezones: {}
    };
  }

  componentDidMount() {
    fetch("https://keystone-habit.herokuapp.com/timezones", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'mode': 'cors'
        }
    })
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            timezones: data
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
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
            let new_iana = this.state.timezones[timezone]
            this.props.setIana(new_iana);
              
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
    const time_options = [];
    for (const[key,value] of Object.entries(this.state.timezones)) {
      time_options.push(<option value={key}>{key}</option>)
    }

    return (
      <>
        <div className='content'>
          <h1 className='page-header'>Setting</h1>
          <div className='text-content'>
            <h2 className='section-header'>General Setting</h2>
            <form onSubmit={this.submit}>
              <span className='footnote'>Select the changes you'd like to apply.</span>
              <label>Font Size: </label>
              <select id='font-size' name='font-size' defaultValue='medium'>
                <option value='small'>Small</option>
                <option value='medium'>Medium (Default)</option>
                <option value='large'>Large</option>
              </select>
              {/* <label>Start of the Week: </label>
              <select id='start-of-week' name='start-of-week' defaultValue='sunday' onChange={e=> this.setState({startOfWeek: e.target.value})}>
                <option value='sunday'>Sunday (Default)</option>
                <option value='monday'>Monday</option>
              </select> */}
              <label>Date highlight color: </label>
              <select id='highlight' name='highlight' defaultValue='default'>
                <option value='default'>Default</option>
                <option value='red'>Red</option>
                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
                <option value='black'>Black</option>
              </select>
              <label>Timezone: </label>
              <select id='timezone' name='timezone' defaultValue='gmt-8' onChange={e => this.setState({timezone: e.target.value})}>
                <option value={null}></option>
                {time_options}
              </select>
              <input type="submit" value="Submit" className='submit-button'/>
            </form>
            <hr/>
            <h2 className='section-header'>Advanced Setting</h2>
            <h3 className='subsec-header'>Theme</h3>
            <form>
              <span className='footnote'>Select the theme you'd like to apply.</span>
              <div className='radio-button'>
                <input type='radio' name='theme' id='default' value='default' defaultChecked></input>
                <label htmlFor='default'>Light Theme (Default)</label>
              </div>
              <div className='radio-button'>
                <input type='radio' name='theme' id='dark' value='themeA'></input>
                <label htmlFor='themeA'>Dark Theme</label>            
              </div>
              {/* <div className='radio-button'>
                <input type='radio' name='theme' id='themeB' value='themeB'></input>
                <label htmlFor='themeB'>theme B</label>            
              </div>
              <div className='radio-button'>
                <input type='radio' name='theme' id='themeC' value='themeC'></input>
                <label htmlFor='themeC'>Theme C</label>            
              </div> */}
              <input type="submit" value="Submit" className='submit-button'/>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Setting;