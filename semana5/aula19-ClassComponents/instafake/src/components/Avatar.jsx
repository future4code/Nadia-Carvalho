import React from 'react';
import PropTypes from 'prop-types';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="avatar">
        <img src={this.props.avatar} />
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default Avatar