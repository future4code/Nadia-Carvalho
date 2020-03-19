import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

class ProfileScreen extends React.Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

ProfileScreen.propTypes = {
  profile: PropTypes.object
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
