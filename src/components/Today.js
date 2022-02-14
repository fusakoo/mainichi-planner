import React from 'react';
import { format } from 'date-fns';

class Today extends React.Component {
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

  render(){
    return (
      <>
        <div className='today-info'>
          {this.greeting(format(this.props.currentDateTime, 'b'))}
          <p>
            Today is {format(this.props.currentDateTime, 'EEEE, MMMM dd, yyyy')}. Time is currently {format(this.props.currentDateTime, 'hh:mm:ss aa (zzzz)')}
          </p>
        </div>
      </>
    );
  }
}

export default Today;