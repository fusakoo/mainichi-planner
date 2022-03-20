import React from 'react';
import ReactMarkdown from 'react-markdown'

class Changelog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className='overlay'>
        <h1 className='page-header'>Change Log</h1>
        <button 
          className='close-button' 
          onClick={this.props.displayLog}
        >Close X</button>
        <div className='logs'>
          <div className='log'>
            <ReactMarkdown children={this.props.logs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Changelog;