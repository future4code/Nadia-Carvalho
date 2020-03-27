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
import { headerStyles } from '../../style/app'
import { connect } from 'react-redux'
import { push } from 'connected-react-router';
import { routes } from '../Router';

function Header(props) {
  
  const classes = headerStyles();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDrawerClick = (url) => {
    handleDrawer()
    props.goTo(url)
  }

  const drawerMenu = [
    {text: "Home", url: routes.root},
    {text: "List all trips", url: routes.tripsList},
    {text: "Create a new trip", url: routes.tripsCreate},
  ]

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={()=> handleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} onClick={() => props.goToHome()}>
            FutureX
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openDrawer}
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
              <ListItemText primary={"Bem vindo!"} />
            </ListItem>
          </List>
          <IconButton onClick={() => handleDrawer()}>
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <Divider />
        <List>
          {drawerMenu.map((item, index) => {
            const IconDrawer = item.icon || PlayArrow
            return (
            <ListItem button key={index} onClick={() => onDrawerClick(item.url)}>
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

const mapStateToProps = (state) => ({
  // auth: state.auth.user?
})

const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(push(routes.root)),
  goTo: (url) => dispatch(push(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)