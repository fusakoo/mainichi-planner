import React from 'react';
import { FaGithub } from 'react-icons/fa';

import ChangeLog from './ChangeLog';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <footer>
        <span>Created by <a href='https://github.com/fusakoo' target='_blank' rel='noreferrer'><FaGithub /> fusakoo</a> | </span>
        <button 
          className='link-button' 
          onClick={this.props.displayLog}
        >Change Log</button>
        { this.props.showLog ? <ChangeLog displayLog = {this.props.displayLog} logs={this.props.logs}/> : null }
      </footer>
    );
  }
}

export default Footer;