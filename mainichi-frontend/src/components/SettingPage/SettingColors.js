import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class SettingColors extends React.Component {
  /* 
    Component for rendering Setting page's color (theme) selection
  */
  constructor(props){
    super(props);
    this.state = {
    }
  }

  submitTheme = (e) => {
    e.preventDefault();

    confirmAlert({
      title: 'Confirm to apply',
      message: 'Would you like to apply the selected theme?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            alert('Theme applied.');
            let newTheme = this.props.themeSelected
            this.props.switchTheme(newTheme);
          }
        },
        {
          label: 'No',
          onClick: () => alert('Theme not applied.')
        }
      ]
    });
  }

  render(){
    return (
      <form onSubmit={this.submitTheme}>
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