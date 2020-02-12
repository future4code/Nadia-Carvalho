import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import PostImage from './PostImage';
import Like from './Like';
import Comment from './Comment';


class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className="Post">
          <Avatar avatar={this.props.avatar.avatar} name ={this.props.avatar.name} />
          <PostImage image ={this.props.image} />
          <Like counter = {this.props.likeCounter} />
          <Comment counter = {this.props.commentCounter}/>
      </article>
    )
  }
}
Post.propTypes = {
  avatar: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  likeCounter: PropTypes.number.isRequired,
  commentCounter: PropTypes.number.isRequired, 
}
export default Post