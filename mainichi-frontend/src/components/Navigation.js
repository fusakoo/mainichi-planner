import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  /* 
    Component for rendering the navbar used by the web app
  */
  render() {
    return (
      <div className='nav'>
        <Link 
          className='app-link' 
          to='/' 
          onClick={this.props.hideDayUI}
        >Home</Link>
        <Link 
          className='app-link' 
          to='/help' 
          onClick={this.props.hideDayUI}
        >Help</Link>
        <Link 
          className='app-link' 
          to='/setting' 
          onClick={this.props.hideDayUI}
        >Setting</Link>
      </div> 
    );
  }
}

export default Navigation;