import React from 'react';

class SettingGeneral extends React.Component {
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

  render(){
    const time_options = [];
    for (const[key,value] of Object.entries(this.state.timezones)) {
      time_options.push(<option value={key}>{key}</option>)
    }

    return (
      <form onSubmit={this.props.submitSetting}>
        <span className='footnote'>Select the options you'd like to make the change.</span>
        <label className='subsec-header'>Timezone </label>
        <span className='footnote'>Select a timezone to change the displayed time (and greeting).</span>
        <select id='timezone' name='timezone' defaultValue='gmt-8' onChange={this.props.updateTimezone}>
          <option value={null}></option>
          {time_options}
        </select>
        <input type='submit' value='Submit' className='submit-button'/>
      </form>
    );
  }
}

export default SettingGeneral;