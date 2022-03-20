import React from 'react';
import ReactMarkdown from 'react-markdown'

import day_image from '../images/dayUI_screenshot.png';

class Help extends React.Component {
  /* 
    Page component for rendering the help page of the web app. Uses pre-loaded 
    markdown files to render the Q&A and feedback sections using react-markdown
  */
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div className='help content'>
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
          <img src={day_image} alt='Day UI' className='image'/>
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
          <ReactMarkdown children={this.props.qaText}/>
          <hr/>  
          <h2 className='section-header'>Feedbacks?</h2>
          <ReactMarkdown children={this.props.feedbackText}/>
        </div>
      </div>
    );
  }
}

export default Help;