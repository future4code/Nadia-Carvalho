import React from 'react';

function ImageButton(props) {
  return (
    <button className="ImageButton">
      <img src={props.icon} />
      <span>{props.text}</span>
    </button>
  );
}

export default ImageButton;
