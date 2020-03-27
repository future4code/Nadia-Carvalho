import { createMuiTheme } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";

export default createMuiTheme({
  palette: {
    primary:{
      main: '#252a34'
    },
    secondary:{
      main: '#FFFFFF'
    },
    error: {
      main: '#ff2e63'
    }, 
    info:{
      main: '#08d9d6'
    },
    success:{
      main: '#005082'
    }
  }
});
