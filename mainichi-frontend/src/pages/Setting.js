import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import SettingColors from '../components/SettingPage/SettingColors';
import SettingGeneral from '../components/SettingPage/SettingGeneral';

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
    this.updateSelectedTheme = this.updateSelectedTheme.bind(this);
    this.submitTheme = this.submitTheme.bind(this);
    this.updateTimezone = this.updateTimezone.bind(this);
  }

  componentDidMount() {
    fetch('https://keystone-habit.herokuapp.com/timezones', {
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

    const { timezone } = this.state;

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
      themeSelected: e.currentTarget.value
    })
  }

  updateTimezone(e){
    this.setState({
      timezone: e.target.value
    })
  }

  render() {
    return (
      <div className='content'>
        <h1 className='page-header'>Setting</h1>
        <div className='text-content'>
          <h2 className='section-header'>General Setting</h2>
          <SettingGeneral 
            submitSetting={this.submitSetting} 
            updateTimezone={this.updateTimezone}
          />
          <h2 className='section-header'>Customize Theme</h2>
          <SettingColors 
            submitTheme={this.submitTheme} 
            updateSelectedTheme={this.updateSelectedTheme}
          />
        </div>
      </div>
    );
  }
}

export default Setting;