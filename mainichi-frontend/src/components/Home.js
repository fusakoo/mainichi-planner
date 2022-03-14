import React from 'react';

function Home() {
  return (
    <>
      <div className='content'>
        <h1 className='page-header'>Home</h1>
        <div className='text-content'>
          <h2 className='section-header'>Welcome to Mainichi Planner!</h2>
          <p>
            Click on a day to get started, or if you are trying this app for the first time, 
            check the help page for tutorial on how to use this app. Visit the setting page
            if you'd like to adjust how your calendar looks, change the start of week, etc.        
          </p>
          <hr/>
          <h2 className='section-header'>Updates</h2>
          <h3 className='subsec-header'>V1.1.0</h3>
          <p>Feb 27, 2022</p>
          <p>Microservice integration (Datetime microservice provided by my CS361 teammate Marcos. Thanks!)</p>
          <ul>
            <li>In setting, timezone can now be selected from a list of timezone to update the greetings message</li>
          </ul>
          <h3 className='subsec-header'>V1.0.0</h3>
          <p>Feb 13, 2022</p>
          <p>
            First release of the app with frontend MVP implemented! 
          </p>
          <p>
            Try out features like changing timezone to keep it in sync with your favorite
            timezone, check the setting menu to explore current options available, 
            help page to gather some information, and more.
          </p>
          <ul>
            <li>Home, Help, and Setting pages are accessible</li>
            <li>Change Log can be accessed in the bottom UI link</li>
            <li>Individual Day UI is accessible by clicking on the days</li>
          </ul>
          <p>Please see Change Log for past patch/release notes.</p>
        </div>
      </div>
    </>
  );
}

export default Home;