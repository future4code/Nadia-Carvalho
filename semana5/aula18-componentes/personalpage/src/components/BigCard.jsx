import React from 'react';

function BigCard(props) {
  return (
    <div className="BigCard">
      <h2>{props.title}</h2>
      <img src={props.avatar} />
      <p>{props.text}</p>
    </div>
  );
}

export default BigCard;
