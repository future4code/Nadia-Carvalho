import React from 'react';
import PropTypes from 'prop-types';
import AddComent from '../images/comment_icon.svg'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.counter | 0,
      commenting: false,
    }
  }
  addComment() {
    this.setState({
      commenting: true
    })
  }

  saveComment(){
    this.setState({
      counter: this.state.counter
    })
  }






}