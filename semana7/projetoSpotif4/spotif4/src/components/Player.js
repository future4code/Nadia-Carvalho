import React, { Component } from 'react';
import props from 'prop-types';
import ReactDOM from 'react-dom';

class Player extends Component {
  componentWillReceiveProps(nextProps) {
    const element = ReactDOM.findDOMNode(this);
    const audio = element.querySelector('audio');
    const source = audio.querySelector('source');

    if ((nextProps.url) && (nextProps.url !== this.props.url)) {
      source.src = nextProps.url;
      audio.load();
      audio.play();
    }
  }
  render() {
    return (
      <div>
        <audio controls={true} autoPlay={true} name="media">
          <source src={this.props.url} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}
Player.propTypes = {
  url: props.string.isRequired
}

export default Player;