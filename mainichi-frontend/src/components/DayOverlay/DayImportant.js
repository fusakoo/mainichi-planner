import React from 'react';

class DayImportant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  importanceSubmit = (e) => {
    e.preventDefault();

    fetch( process.env.REACT_APP_BACKEND_URL + '/api/date/important/' + this.props.date_formatted, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        important: (this.props.newImportance==='true')? true:false
      })
    }).then(response => response.json())
    .then(data => {
      if (alert('Importance updated.')) {
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
      <form className='importance-container' onSubmit={this.importanceSubmit}>
        <label htmlFor='important' className='bold'>Mark day as important  </label>
        <span className='importance-check'>
          <input 
            type='radio' 
            name='important' 
            id='important' 
            value={true}
            onChange={e => this.props.updateImportance(e)}
          />
          <label htmlFor='default'>Yes</label>
          <input 
            type='radio' 
            name='important' 
            id='important' 
            value={false} 
            onChange={e => this.props.updateImportance(e)}
          />
          <label htmlFor='default'>No</label>
          <span className='footnote'> (This will add a box around the date)</span>
        </span>
        <input type='submit' value='Submit' className='submit-button'/>
      </form>
    );
  }
}

export default DayImportant;