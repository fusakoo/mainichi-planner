import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class SettingGeneral extends React.Component {
  /* 
    Component for rendering Setting page's general setting options
  */
  constructor(props){
    super(props);
    this.state = {
      timezones: {}
    }
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

    const timezone = this.props.timezone;

    confirmAlert({
      title: 'Confirm to apply',
      message: 'Would you like to apply the settings?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            alert('Settings applied.');
            let new_iana = this.props.timezones[timezone]
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

  render(){
    const time_options = [];
    for (const[key] of Object.entries(this.state.timezones)) {
      time_options.push(<option value={key}>{key}</option>)
    }

    return (
      <form onSubmit={this.submitSetting}>
        <span className='footnote'>Select the options you'd like to make the change.</span>
        <label className='subsec-header'>Timezone </label>
        <span className='footnote'>Select a timezone to change the displayed time (and greeting).</span>
        <select 
          id='timezone' 
          name='timezone' 
          defaultValue='gmt-8' 
          onChange={this.props.updateTimezone}
        >
          <option value={null}></option>
          {time_options}
        </select>
        <input type='submit' value='Submit' className='submit-button'/>
      </form>
    );
  }
}

export default SettingGeneral;