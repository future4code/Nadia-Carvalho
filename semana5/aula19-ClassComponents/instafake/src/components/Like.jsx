import React from 'react';
import PropTypes from 'prop-types';
import HollowS2 from '../images/favorite-white.svg'
import SolidS2 from '../images/favorite.svg'

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.counter | 0,
      liked: false,
      iconLike: HollowS2 
    }
  }

  like() {
    this.setState({
      liked: true,
      iconLike: SolidS2,
      counter: this.state.counter + 1
    })
  }

  unlike() {
    this.setState({
      liked: false,
      iconLike: HollowS2,
      counter: this.state.counter - 1
    })
  }

  handleClick() {
    if (this.state.liked) {
      this.unlike()
    } else {
      this.like()
    }
  }

  render() {
    return (
      <div className="Like">
        <img src={this.state.iconLike} onClick={this.handleClick} />
        <span>{this.state.counter}</span>
      </div>
    )
  }
}

Like.propTypes = {
  counter: PropTypes.number.isRequired,
}

export default Like