import React from 'react';
// import { format } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz'

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  } 
  greeting(time) {
    if (time === 'AM') {
      return <h1 className='section-header'>Good morning!</h1>
    }
    if (time === 'PM') {
      return <h1 className='section-header'>Good evening!</h1>
    }
    if (time === 'noon') {
      return <h1 className='section-header'>Good afternoon!</h1>
    }
    if (time === 'midnight') {
      return <h1 className='section-header'>Hello! Don't stay up too late!</h1>
    }
    else {
      return <h1 className='section-header'>Hello!</h1>
    }
  }

  renderDate() {
    const date = this.props.currentDateTime
    const timeZone = this.props.iana
    const zonedDate = utcToZonedTime(date, timeZone)

    return format(zonedDate, 'EEEE, MMMM dd, yyyy')
  }

  renderTime() {
    const date = this.props.currentDateTime
    const timeZone = this.props.iana
    const zonedDate = utcToZonedTime(date, timeZone)

    return format(zonedDate, 'hh:mm:ss aa \'GMT\'XXX (z)', { timeZone: timeZone })
  }

  render(){
    return (
      <>
        <div className='today-info'>
          {this.greeting(format(this.props.currentDateTime, 'b'))}
          <p>
            Today is {this.renderDate()}. Time is currently {this.renderTime()}.
          </p>
        </div>
      </>
    );
  }
}

export default Today;