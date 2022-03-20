import React from 'react';

class DayNotes extends React.Component {
  /* 
    Component for rendering DayUI's note update section for the day
  */
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  noteSubmit = (e) => {
    e.preventDefault();

    fetch( process.env.REACT_APP_BACKEND_URL + '/api/date/note/' + this.props.date_formatted, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        note: this.props.newNote
      })
    }).then(response => response.json())
    .then(data => {
      if (alert('Note updated.')) {
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
      <form onSubmit={this.noteSubmit}>
        <h2 className='section-header'>Notes</h2>
        <h3 className='subsec-header'>Current note</h3>
        <div className='day-note'>{this.props.note}</div>
        <span className='footnote'>Write a note (max: 255 characters) and click submit to save/update.</span>
        <textarea 
          className='note-input'
          value={this.props.newNote}
          onChange={e => this.props.updateNote(e)}
          id='note' 
          name='note' 
          rows='10' 
          cols='20'
          maxLength='254' 
          placeholder='Make any notes here.'
        />
        <input type='submit' value='Save' className='submit-button'/>
      </form>
    );
  }
}

export default DayNotes;