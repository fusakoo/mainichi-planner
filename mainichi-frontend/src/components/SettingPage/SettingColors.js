import React from 'react';

class SettingColors extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <form onSubmit={this.props.submitTheme}>
        <label className='subsec-header'>Colors</label>
        <span className='footnote'>Select the theme color you'd like to apply.</span>
        <div className='radio-button'>
          <input 
            type='radio' 
            name='theme' 
            id='light' 
            value='light' 
            defaultChecked 
            onChange={this.props.updateSelectedTheme}
          ></input>
          <label htmlFor='default'>Light (Default)</label>
        </div>
        <div className='radio-button'>
          <input 
            type='radio' 
            name='theme' 
            id='dark' 
            value='dark' 
            onChange={this.props.updateSelectedTheme}
          ></input>
          <label htmlFor='themeA'>Dark</label>            
        </div>
        <div className='radio-button'>
          <input 
            type='radio' 
            name='theme' 
            id='seafoam' 
            value='seafoam' 
            onChange={this.props.updateSelectedTheme}
          ></input>
          <label htmlFor='themeA'>Seafoam</label>            
        </div>
        <div className='radio-button'>
          <input 
            type='radio' 
            name='theme' 
            id='dandelion' 
            value='dandelion' 
            onChange={this.props.updateSelectedTheme}
          ></input>
          <label htmlFor='themeA'>Dandelion</label>            
        </div>
        <input type='submit' value='Submit' className='submit-button'/>
      </form>
    );
  }
}

export default SettingColors;