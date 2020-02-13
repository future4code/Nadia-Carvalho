import React from 'react';
import PropTypes from 'prop-types';
import AddComent from '../images/comment_icon.svg'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.counter | 0,
      commenting: false,
      comment: ""
    }
  }

  addComment = () => {
    this.setState({
      commenting: !this.state.commenting,
      comment: ""
    })
  }

  saveComment = () => {
    this.setState({
      counter: this.state.counter + 1,
      commenting: false,
      comment: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  render() {
    let inputClass = "input"
    if (!this.state.commenting) {
      inputClass = "input hide"
    }
    return (
      <div className="Comment"> 
        <div className="buttons">
          <img src={AddComent} onClick={this.addComment} />
          <span>{this.state.counter}</span>
        </div>
        <div className={inputClass}>
          <input type="text" placeholder="Escreva seu comentário" value={this.state.comment} onChange={this.handleChange} />
          <button onClick={this.saveComment}>Comentar</button>
        </div>
      </div>
    )
  }

}

Comment.propTypes = {
  counter: PropTypes.number.isRequired
}

export default Comment