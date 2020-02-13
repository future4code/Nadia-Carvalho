import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = styled.div`
  text-align: center;
`
const Image = styled.img`
  width: 300px;
` 

class PostImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageContainer>
        <Image src={this.props.image} />
      </ImageContainer>
    )
  }
}
PostImage.propTypes = {
  image:PropTypes.string.isRequired
}
export default PostImage