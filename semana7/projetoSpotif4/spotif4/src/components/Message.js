import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.p`
  background-color: #3b403a;
  border-radius: 7px;
  margin:15px;
  padding:15px;
  text-align: center;
  font-size: 0.8rem;
  font-family: Helvetica, Arial, sans-serif;
  font-style: italic;
  visibility: hidden;
  white-space: pre-line;
  &.info {
    color: #8596ff;
    visibility: visible;
  }
  &.error{
    color: #ff512a;
    visibility: visible;
  }
  &.success{
    color: #2dd70f;
    visibility: visible;
  }
`

function Message(props) {
  return (
    <Wrapper className={props.type}>
      {props.text || props.children}
    </Wrapper>
  );
}

Message.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
};

Message.defaultProps = {
  text: '',
  type: 'info'
}

export default Message;