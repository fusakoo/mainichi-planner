import React from 'react';

import IconList from './IconList';

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedIcons: this.props.icons
    }
  }

  checkIcons = icon => {
    if (this.props.icons.has(icon)) {
      return true
    } else {
      return false
    }
  }

  renderIcons() {
    let icons = []
    for(var i in IconList) {
      let iconName = IconList[i]
      icons.push(
        <span className = {
          `icon material-icons
          ${
            !this.checkIcons(iconName)
              ? '' : 'highlight'
          }`
        }
        value = {iconName}
        onClick = { () => {this.props.updateIcons(iconName)} }>
          {iconName}
        </span>
      )
    }
    return icons
  }

  noteSubmit = (e) => {
    e.preventDefault();

    fetch( 'http://localhost:3001/api/date/note/' + this.props.date_formatted, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        note: this.state.newNote
      })
    }).then(response => response.json())
    .then(data => {
      if (alert("Note updated.")) {
      } else {
        window.location.reload();
      }
    })
    .catch(error => {
      alert(error);
    });
  }

  render(){
    return (
      <form onSubmit={this.submit}>
        <h2 className='section-header'>Icons</h2>
        <span className='footnote'>Select up to 4 icons to display on calendar</span>
        <div className='icon-list'>
          <div className='icon-list'>{this.renderIcons()}</div>
        </div>
        <input type="submit" value="Submit" className='submit-button'/>
      </form>
    );
  }
}

export default Icons;