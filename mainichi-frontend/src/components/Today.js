import React from 'react';
import { format, utcToZonedTime } from 'date-fns-tz'

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  } 

  getDateInfo() {
    const date = this.props.currentDateTime;
    const timeZone = this.props.iana;
    const zonedDate = utcToZonedTime(date, timeZone);

    return [date, timeZone, zonedDate];
  }
  
  greeting() {
    const zonedDate = this.getDateInfo()[2];

    let time = format(zonedDate, 'b');

    if (time === 'AM') {
      return <h1 className='section-header'>Good morning!</h1>
    }
    if (time === 'PM') {
      return <h1 className='section-header'>Hello and welcome!</h1>
    }
    if (time === 'noon') {
      return <h1 className='section-header'>Hi there! Having a good lunch?</h1>
    }
    if (time === 'midnight') {
      return <h1 className='section-header'>Welcome! Don't stay up too late!</h1>
    }
    else {
      return <h1 className='section-header'>Hello and welcome!</h1>
    };
  }

  renderDate() {
    const zonedDate = this.getDateInfo()[2];

    return format(zonedDate, 'EEEE, MMMM dd, yyyy');
  }

  renderTime() {
    const timeZone = this.getDateInfo()[1],
          zonedDate = this.getDateInfo()[2];

    return format(zonedDate, 'hh:mm:ss aa \'GMT\'XXX (z)', { timeZone: timeZone });
  }

  render(){
    return (
      <>
        <div className='today-info'>
          {this.greeting()}
          <p>
            Today is {this.renderDate()}. Time is currently {this.renderTime()}.
          </p>
        </div>
      </>
    );
  }
}

export default Today;