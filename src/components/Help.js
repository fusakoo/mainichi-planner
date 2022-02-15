import React from 'react';


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
            to the latest feature available on this app. Visit anytime by clicking the "Home"
            link at the top.
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
            Adjust your timezone or highlight colors, select your favorite color theme,
            and import/export data so you have it ready just in case.
          </p>
          <hr/>  
          <h2 className='section-header'>Q&A</h2>
          <p>Commonly asked questions will be listed here.</p>
          <ul>
            <li>Question 1</li>
            <ul>
              <li>Answer</li>
            </ul>
            <li>Question 2</li>
            <ul>
              <li>Answer</li>
            </ul>
          </ul>
          <hr/>  
          <h2 className='section-header'>Feedbacks?</h2>
          <p>Please feel free to shoot an email to <a href = "mailto: test123@testmail.com">test123@testmail.com</a> for any feedback/suggestion/etc.!</p>
        </div>
      </div>
    </>
  );
}

export default Help;