import React from 'react';
import { confirmAlert } from 'react-confirm-alert';

class Setting extends React.Component {
  // const location = useLocation();
  submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  };

  render() {
    return (
      <>
        <div className='content'>
          <h1 className='page-header'>Setting</h1>
          <form>
            <h2 className='section-header'>General Setting</h2>
            <label>Font Size: </label>
            <select id='font-size' name='font' defaultValue='medium'>
              <option value='small'>Small</option>
              <option value='medium'>Medium (Default)</option>
              <option value='large'>Large</option>
            </select>
            <label>Start of the Week: </label>
            <select id='start-of-week' name='start-of-week' defaultValue='sunday'>
              <option value='sunday'>Sunday (Default)</option>
              <option value='monday'>Monday</option>
            </select>
            <label>Date highlight color: </label>
            <select id='font-size' name='fonts' defaultValue='default'>
              <option value='default'>Default</option>
              <option value='red'>Red</option>
              <option value='blue'>Blue</option>
              <option value='green'>Green</option>
              <option value='black'>Black</option>
            </select>
            <h2 className='section-header'>Theme</h2>
            <div className='radio-button'>
              <input type='radio' name='theme' id='default' value='default' defaultChecked></input>
              <label htmlFor='default'>Default</label>
            </div>
            <div className='radio-button'>
              <input type='radio' name='theme' id='themeA' value='themeA'></input>
              <label htmlFor='themeA'>Theme A</label>            
            </div>
            <div className='radio-button'>
              <input type='radio' name='theme' id='themeB' value='themeB'></input>
              <label htmlFor='themeB'>Theme B</label>            
            </div>
            <div className='radio-button'>
              <input type='radio' name='theme' id='themeC' value='themeC'></input>
              <label htmlFor='themeC'>Theme C</label>            
            </div>
            <input type="submit" value="Submit" className='submit-button' onClick={this.submit}/>
          </form>
          <hr/>
          <form id='import-export'>
            <h2 className='section-header'>Import / Export</h2>
            <div>
              <label htmlFor='import'>Import a calendar: </label>
              <input type='file' id='import'/> 
            </div>
            <input type='submit' value='Import a file' className='submit-button'></input>
          </form>
          <form>
            <label>Export current calendar</label>
            <input type='submit' value='Export'className='submit-button'></input>
          </form>
        </div>
      </>
    );
  }
}

export default Setting;