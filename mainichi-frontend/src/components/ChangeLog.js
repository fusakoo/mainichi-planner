import React from 'react';

class Changelog extends React.Component {
  render(){
    return (
      <>
        <div className='overlay'>
          <h1 className='page-header'>Change Log</h1>
          <button className='close-button' onClick={this.props.displayLog}>Close X</button>
          <div className='logs'>
            <div className='log'>
              <h3>V1.1.0</h3>
              <p>Feb 27, 2022</p>
              <p>Microservice integration (Datetime microservice provided by my CS361 teammate Marcos. Thanks!)</p>
              <ul>
                <li>In setting, timezone can now be selected from a list of timezone to update the greetings message</li>
              </ul>
              <h3>V1.0.0</h3>
              <p>Feb 13, 2022</p>
              <p>The very first release of the Mainichi Planner app!<br/>Here are some of the key features:</p>
              <ul>
                <li>Home, Help, and Setting pages are accessible</li>
                <li>Change Log can be accessed in the bottom UI link</li>
                <li>Individual Day UI is accessible by clicking on the days</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Changelog;