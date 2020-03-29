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
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function HomePage(props) {
  const buttonTrips = props.isLogged ? 'Manage trips' : 'Trips Avaliable'
  return (
    <Wrapper>
      <FutureX src={PictureSmall} />
      <Typography paragraph variant="subtitle1" style={{
        padding: "16px 16px 0px",
        fontStyle: "oblique",
        textAlign: "justify", 
        textJustify: "inter-word", 
        wordWrap: "break-word"
      }}
      >
      "Land on Mars, a round-trip ticket - half a million dollars.<br/>It can be done."<br/> -Elon Musk
    </Typography>
    <Button 
      color="primary" size="large"
      variant="contained"
      onClick={props.goToTrips}
    >
      {buttonTrips}
    </Button>
    </Wrapper>
  );
}
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged
})

const mapDispatchToProps = (dispatch) => ({
  goToTrips: () => dispatch(goToLink(routes.tripsList))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);