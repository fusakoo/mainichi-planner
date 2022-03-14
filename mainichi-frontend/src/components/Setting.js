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
      timezones: {},
      themeSelected: 'light'
    };

    this.updateSelectedTheme = this.updateSelectedTheme.bind(this)
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

  submitSetting = (e) => {
    e.preventDefault();

    const { timezone, startOfWeek } = this.state

    confirmAlert({
      title: 'Confirm to apply',
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

  submitTheme = (e) => {
    e.preventDefault();

    confirmAlert({
      title: 'Confirm to apply',
      message: 'Would you like to apply the selected theme?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            alert('Theme applied.');
            let newTheme = this.state.themeSelected
            this.props.switchTheme(newTheme);
          }
        },
        {
          label: 'No',
          onClick: () => alert('Theme not applied.')
        }
      ]
    });
  }

  updateSelectedTheme(e){
    this.setState({
      themeSelected: e.currentTarget.value,
    })
  }

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
            <form onSubmit={this.submitSetting}>
              <span className='footnote'>Select the options you'd like to make the change.</span>
              {/* <label>Font Size: </label>
              <select id='font-size' name='font-size' defaultValue='medium'>
                <option value='small'>Small</option>
                <option value='medium'>Medium (Default)</option>
                <option value='large'>Large</option>
              </select> */}
              {/* <label>Start of the Week: </label>
              <select id='start-of-week' name='start-of-week' defaultValue='sunday' onChange={e=> this.setState({startOfWeek: e.target.value})}>
                <option value='sunday'>Sunday (Default)</option>
                <option value='monday'>Monday</option>
              </select> */}
              {/* <label>Date highlight color: </label>
              <select id='highlight' name='highlight' defaultValue='default'>
                <option value='default'>Default</option>
                <option value='red'>Red</option>
                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
                <option value='black'>Black</option>
              </select> */}
              <label>Timezone: </label>
              <select id='timezone' name='timezone' defaultValue='gmt-8' onChange={e => this.setState({timezone: e.target.value})}>
                <option value={null}></option>
                {time_options}
              </select>
              <input type="submit" value="Submit" className='submit-button'/>
            </form>
            <h2 className='section-header'>Customize Theme</h2>
            <h3 className='subsec-header'>Colors</h3>
            <form onSubmit={this.submitTheme}>
              <span className='footnote'>Select the theme color you'd like to apply.</span>
              <div className='radio-button'>
                <input type='radio' name='theme' id='light' value='light' defaultChecked onChange={this.updateSelectedTheme}></input>
                <label htmlFor='default'>Light (Default)</label>
              </div>
              <div className='radio-button'>
                <input type='radio' name='theme' id='dark' value='dark' onChange={this.updateSelectedTheme}></input>
                <label htmlFor='themeA'>Dark</label>            
              </div>
              <div className='radio-button'>
                <input type='radio' name='theme' id='seafoam' value='seafoam' onChange={this.updateSelectedTheme}></input>
                <label htmlFor='themeA'>Seafoam</label>            
              </div>
              <div className='radio-button'>
                <input type='radio' name='theme' id='dandelion' value='dandelion' onChange={this.updateSelectedTheme}></input>
                <label htmlFor='themeA'>Dandelion</label>            
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