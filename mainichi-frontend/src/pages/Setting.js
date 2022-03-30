import React from 'react';

import SettingColors from '../components/SettingPage/SettingColors';
import SettingGeneral from '../components/SettingPage/SettingGeneral';

class Setting extends React.Component {
  /* 
    Page component for rendering the setting page. 
    Child components: SettingGeneral, SettingColors
  */
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
    this.updateTimezone = this.updateTimezone.bind(this);
    this.setIana = this.setIana.bind(this);
    this.switchTheme = this.switchTheme.bind(this);
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

  setIana = newIana => {
    this.props.setIana(newIana)
  }

  switchTheme = newTheme => {
    this.props.switchTheme(newTheme)
  }

  render() {
    return (
      <div className='content'>
        <h1 className='page-header'>Setting</h1>
        <div className='text-content'>
          <h2 className='section-header'>General Setting</h2>
          <SettingGeneral 
            updateTimezone={this.updateTimezone}
            setIana={this.setIana}
            iana={this.props.iana}
            timezone={this.state.timezone}
            timezones={this.state.timezones}
          />
          <h2 className='section-header'>Customize Theme</h2>
          <SettingColors 
            updateSelectedTheme={this.updateSelectedTheme}
            switchTheme={this.switchTheme}
            themeSelected={this.state.themeSelected}
          />
        </div>
      </div>
    );
  }
}

export default Setting;