import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { doCloseSnackBar } from '../../middlewares/interface'
import { connect } from 'react-redux';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SnackBar(props) {
  const { open, severity, message } = props
  const handleClose = () => props.close()
  return (
    <Snackbar 
      open={open} 
      onClose={handleClose}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

const mapStateToProps = (state) => ({
  open: state.ui.snackbar.open,
  severity: state.ui.snackbar.type,
  message: state.ui.snackbar.message,
})

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(doCloseSnackBar())
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar)