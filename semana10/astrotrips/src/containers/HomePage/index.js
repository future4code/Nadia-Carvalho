import React from 'react';
import Picture from '../../images/futurex.png';
import styled from 'styled-components';

const FutureX = styled.img `
width: 400px;
max-width: 80vw;
`

function HomePage(props) {
  return (
    <div>
    <FutureX src={Picture} />
    </div>
  );
}

export default HomePage;