import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component {
  /* 
    Component for rendering the web app's header
    Child components: Navigation
  */
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <header>
        <div id='logo'>
          <span className='material-icon'>event</span>
          <span>Mainichi Planner</span>
        </div>
        <Navigation hideDayUI={this.props.hideDayUI}/>
      </header>
    );
  }
}

export default Header;
