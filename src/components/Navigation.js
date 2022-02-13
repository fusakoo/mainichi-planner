import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className='nav'>
          <Link className='app-link' to='/' onClick={this.props.hideDay}>Home</Link>
          <Link className='app-link' to='/help' onClick={this.props.hideDay}>Help</Link>
          <Link className='app-link' to='/setting' onClick={this.props.hideDay}>Setting</Link>
        </div> 
      </>
    );
  }
}

export default Navigation;