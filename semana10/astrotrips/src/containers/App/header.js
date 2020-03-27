import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff'
import PlayArrow from '@material-ui/icons/PlayArrow'
import { withStyles } from '@material-ui/styles';
import { headerStyles } from '../../style/app'
import { connect } from 'react-redux'
import { routes } from '../Router';
import { doLogout } from '../../middlewares/auth'
import { Button } from '@material-ui/core';
import { goToLink } from '../../middlewares/interface';

class Header extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      openMenu: false,
      openDrawer: false
    }
  }

  handleDrawer = () => {
    this.setState({openDrawer: !this.state.openDrawer})
  };

  handleMenu = (event) => {
    this.setState({openMenu: !this.state.openMenu, anchorEl: event.currentTarget})
  };

  onDrawerClick = (url) => {
    this.handleDrawer()
    this.props.goTo(url)
  }

  drawerMenu = () => {
    const { isLogged } = this.props
    if (isLogged) {
      return [
        {text: "Home", url: routes.root},
        {text: "Manage trips", url: routes.tripsList},
        {text: "Create a new trip", url: routes.tripsCreate},
      ]
    }else{
    return [
      {text: "Home", url: routes.root},
      {text: "List all trips", url: routes.tripsList},
    ]
  }}

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu"
              onClick={()=> this.handleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              variant="h6" className={classes.title} 
              style={{ cursor: "pointer" }}
              onClick={() => this.props.goToHome()}
            >
              FutureX
            </Typography>
            {this.props.isLogged && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={this.state.openMenu}
                  onClose={this.handleClose}
                  style={{marginTop: "36px"}}
                >
                  <MenuItem onClick={this.handleMenu}>Close</MenuItem>
                  <Divider/>
                  <MenuItem onClick={(e) => {
                    this.handleMenu(e)
                    this.props.doLogout()
                  }}>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            )}
            {
              !this.props.isLogged &&
              <Button 
                variant="outlined" 
                color="secondary"
                onClick={this.props.goToLogin}
                size="small"
              >
                Admin
              </Button>
            }
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.openDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <List>
              <ListItem key={1}>
                <ListItemIcon>
                  <FlightTakeoff />
                </ListItemIcon>
                <ListItemText primary={"Welcome!"} />
              </ListItem>
            </List>
            <IconButton onClick={() => this.handleDrawer()}>
              <ChevronLeftIcon/>
            </IconButton>
          </div>
          <Divider />
          <List>
            {this.drawerMenu().map((item, index) => {
              const IconDrawer = item.icon || PlayArrow
              return (
              <ListItem button key={index} onClick={() => this.onDrawerClick(item.url)}>
                <ListItemIcon><IconDrawer/></ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
              )
            })}
          </List>
        </Drawer>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged
})

const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(goToLink(routes.root)),
  goToLogin: () => dispatch(goToLink(routes.login)),
  goTo: (url) => dispatch(goToLink(url)),
  doLogout: () => dispatch(doLogout())
})

export default withStyles(headerStyles)(connect(mapStateToProps, mapDispatchToProps)(Header))