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
    if (this.props.selectedIcons.has(icon)) {
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

  addIcon = icon => {
    fetch( 'http://localhost:3001/api/icon/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        iconName: icon,
        date: this.props.date_formatted
      })
    }).then(response => response.json())
    .catch(error => {
      alert(error);
    });
  }

  dropIcon = icon => {
    fetch( 'http://localhost:3001/api/icon/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        iconName: icon,
        date: this.props.date_formatted
      })
    }).then(response => response.json())
    .catch(error => {
      alert(error);
    });
  }

  iconSubmit = (e) => {
    e.preventDefault();

    this.props.icons.forEach((oldIcon) => {
      this.dropIcon(oldIcon)
    })
    this.props.selectedIcons.forEach((newIcon) => {
      this.addIcon(newIcon)
    })
    alert('Icons saved.')
  }

  render(){
    return (
      <form onSubmit={this.iconSubmit}>
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