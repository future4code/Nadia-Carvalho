import React from 'react';
import PropTypes from 'prop-types';

class PostImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="PostImage">
        <img src={this.props.image} />
      </div>
    )
  }
}
PostImage.propTypes = {
  image:PropTypes.string.isRequired
}
export default PostImage