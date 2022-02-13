import React from 'react';

class Changelog extends React.Component {
  render(){
    return (
      <>
        <div className='overlay'>
          <h1 className='page-header'>Change Log</h1>
          <button className='close-button' onClick={this.props.displayLog}>Close X</button>
          <div className='logs'>
            <div className='log'>
              <h3>V1.0.0</h3>
              <p>The very first release of the Mainichi Planner app!<br/>Here are some of the key features:</p>
              <ul>
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
              </ul>
              <h3>V0.0.2</h3>
              <p>
                Below are random wall of texts to showcase the scrollable change log. 
              </p>  
              <h3>V0.0.1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget sem ac erat pellentesque ornare ac vitae augue. Nulla sed vehicula lectus. Sed hendrerit velit id turpis euismod, sed gravida mauris pretium. Nam ex turpis, porttitor et placerat quis, hendrerit sit amet urna. Donec ac enim eu massa pellentesque interdum non a elit. Nulla malesuada venenatis purus sit amet sollicitudin. Etiam id ex eu urna venenatis ultricies. Vivamus blandit elementum mi in vehicula. Phasellus non est eu metus pretium rutrum a non nibh. Vivamus dignissim justo ante, a blandit tellus ullamcorper vel. Sed dictum justo sed diam volutpat porta. Fusce consectetur ex nisi, id sagittis orci pharetra quis. Praesent iaculis libero quam, vel malesuada turpis rhoncus vel. Phasellus feugiat ornare felis sed commodo. Aenean et odio nec nisl faucibus molestie vitae non lectus. Proin congue elementum arcu a pharetra. 
              </p>  
              <h3>V0.0.0</h3>
              <p>
                Aliquam erat volutpat. Pellentesque efficitur leo erat, in porta justo blandit id. Ut in nisl justo. Morbi a velit varius, posuere nunc eleifend, interdum lorem. Praesent id volutpat odio, vel sagittis velit. Vivamus ac vehicula nunc, non efficitur purus. Integer vitae neque quam. Aenean auctor euismod mi, vel ultricies augue fringilla vel. Nulla quis fringilla tellus, a eleifend nulla. Aenean posuere ligula a sapien consequat, eu ultrices quam pretium. Mauris nibh lacus, venenatis nec mi eget, ultrices vulputate ligula. Sed nec lacus suscipit, eleifend magna quis, rutrum justo. Donec in luctus nisl. Morbi sollicitudin varius massa quis bibendum.               
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Changelog;