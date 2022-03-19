import React from 'react';
import day_image from '../images/dayUI_screenshot.png';

function Help() {
  return (
    <>
      <div className='content'>
        <h1 className='page-header'>Help</h1>
        <div className='text-content'>
          <h2 className='section-header'>How to use this app.</h2>
          <p>
            Welcome to the Mainichi Planner app. The goal of this app is to provide you
            close to the physical daily planner experience as much as possible, while 
            allowing you access to cool features vailable by the planner being digital!
          </p>
          <h3 className='subsec-header'>Home Page</h3>
          <p>
            First you will be greeted with the Home page. Home page is where it contains
            the general overview of the app, how to start using it, and introduction
            to the latest feature available on this app. 
          </p>
          <p>
            Visit anytime by clicking the "Home" link at the top.
          </p>
          <h3 className='subsec-header'>Day UI</h3>
          <img src={day_image} alt="Day UI image" className='image'/>
          <p>
            This is the page where you may see when you click on a day. Various customization
            for the day are available (e.g., importance indicator, icons, events, notes).
          </p>
          <h3 className='subsec-header'>Help Page</h3>
          <p>
            This is the current page you are at. It will contain more in-depth information
            about this web app, how to use it, etc. You can reach out to the creator by 
            looking at the feedback section as well on this page.
          </p>
          <h3 className='subsec-header'>Setting Page</h3>
          <p>
            Page that allows you to customize some of the the features on the web app. 
            Currently you can ddjust your timezone and select your favorite color theme,
          </p>
          <hr/>  
          <h2 className='section-header'>Q&A</h2>
          <p>Commonly asked questions will be listed here.</p>
          <ul>
            <li className='help-list'>What is the black circle on each of the day mean?</li>
            <ul>
              <li className='less-margin'>The black circle with a number reflects the number of events for that day.</li>
            </ul>
            <li className='help-list'>How come I can't select more than 4 icons per day?</li>
            <ul>
              <li className='less-margin'>That's currently something in the works, but I found this to be the optimal number for the time being.</li>
              <li className='less-margin'>Limits may be increased if better UI is implemented and/or demand is high!</li>
            </ul>
            <li className='help-list'>How did you create this web app?</li>
            <ul>
              <li className='less-margin'>Lots of coffee and sleepless nights.</li>
              <li className='less-margin'>It's built with React, Node.js, Express, MySQL. Icons are material icons.</li>
              <li className='less-margin'>Microservice is using Python and Flask. It's available on Heroku.</li>
            </ul>
            <li className='help-list'>Where can I submit a feedback?</li>
            <ul>
              <li className='less-margin'>Look below for best way to reach out to the creator.</li>
            </ul>
          </ul>
          <hr/>  
          <h2 className='section-header'>Feedbacks?</h2>
          <p>
            For any feedback/suggestion/etc., please feel free raise an issue to 
            this project's <a href = "https://github.com/fusakoo/mainichi-planner/issues"> Github</a>.
            Thank you for your support! With love, Fusako.
          </p>
        </div>
      </div>
    </>
  );
}

export default Help;