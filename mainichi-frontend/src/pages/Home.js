import React from 'react';
import ReactMarkdown from 'react-markdown'

class Home extends React.Component {
  /* 
    Page component for rendering the home page. Uses pre-loaded markdown file to 
    render the change logs using react-markdown 
  */
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className='content'>
        <h1 className='page-header'>Home</h1>
        <div className='text-content'>
          <h2 className='section-header'>Welcome to Mainichi Planner!</h2>
          <p>
            Click on a day to get started, or if you are trying this app for the first time, 
            check the help page for tutorial on how to use this app. Visit the setting page
            if you'd like to adjust how your calendar looks, change the timezone, etc.     
          </p>
          <hr/>
          <h2 className='section-header'>Updates</h2>
          <ReactMarkdown children={this.props.logs}/>
          <p>Please see Change Log for past patch/release notes.</p>
        </div>
      </div>
    );
  }
}

export default Home;