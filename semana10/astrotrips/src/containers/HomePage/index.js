import React from 'react';
import PictureSmall from '../../images/futurex-small.png'
import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';
import { routes } from '../Router';
import { connect } from 'react-redux';
import { goToLink } from '../../middlewares/interface';

const FutureX = styled.img `
  width: 400px;
  max-width: 80vw;
`

const Wrapper = styled.div`
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function HomePage(props) {
  return (
    <Wrapper>
      <FutureX src={PictureSmall} />
      <Typography paragraph variant="subtitle1" style={{
        marginTop: "16px",
        fontStyle: "oblique",
        textAlign: "justify", 
        textJustify: "inter-word", 
        wordWrap: "break-word"
      }}
      >
      "Land on Mars, a round-trip ticket - half a million dollars. It can be done.", Elon Musk
    </Typography>
    <Button 
      color="primary" size="large"
      variant="contained"
      onClick={props.goToTrips}
    >
      Trips Available
    </Button>
    </Wrapper>
  );
}

const mapDispatchToProps = (dispatch) => ({
  goToTrips: () => dispatch(goToLink(routes.tripsList))
})

export default connect(null, mapDispatchToProps)(HomePage);