import React from 'react';

function SmallCard(props) {
  return (
    <div className="SmallCard">
      <img src={props.icon} />
      <strong>{props.title}</strong>
      <span>{props.text}</span>
    </div>
  );
}

export default SmallCard;
