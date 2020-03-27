import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/Toc';
import HomeIcon from '@material-ui/icons/Home';
import LoginIcon from '@material-ui/icons/LockOpen'
import CreateIcon from '@material-ui/icons/CardTravel';
import { routes } from '../Router'
import { goToLink } from '../../middlewares/interface'
import { connect } from 'react-redux';

function Footer(props) {
  
  const handleChange = (event, tab) => {
    props.changeTab(tab)
  };

  const navigation = () => {
    const { isLogged } = props
    if (isLogged) {
      return [
        { label: "Manage", url: routes.tripsList, icon: ListIcon },
        { label: "Home", url: routes.root, icon: HomeIcon },
        { label: "New Trip", url: routes.tripsCreate, icon: CreateIcon }
      ]
    } else {
      return [
        { label: "Trips", url: routes.tripsList, icon: ListIcon },
        { label: "Home", url: routes.root, icon: HomeIcon },
        { label: "Login", url: routes.login, icon: LoginIcon }
      ]
    }
  }

  return (
    <BottomNavigation value={props.currentTab} onChange={handleChange}>
      {navigation().map( (item, index) => {
        const Icon = item.icon
        return (
          <BottomNavigationAction 
            key={index}
            label={item.label} 
            value={item.url} 
            icon={<Icon />} 
          />
        )
      })}
    </BottomNavigation>
  );
}

const mapStateToProps = (state) => ({
  currentTab: state.ui.currentTab,
  isLogged: state.auth.isLogged
})

const mapDispatchToProps = (dispatch) => ({
  changeTab: (tab) => dispatch(goToLink(tab))
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)