import React, {useEffect} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./actions/auth.action";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));

function isAdmin(auth) {
  return auth && (auth.authorities.findIndex((authority) => {
    return authority.id === 1;
  })) !== -1;
}

function isUser(auth) {
  return auth && (auth.authorities.findIndex((authority) => {
    return authority.id === 2;
  })) !== -1;
}

function Header() {
  const classes = useStyles();
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React JWT Demo
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/demo">Demo</Button>
          </div>
          <div>
            <Button color="inherit" component={Link} to="/public">Public</Button>
          </div>
          {
            (isAdmin(auth) || isUser(auth)) ? <div>
              <Button color="inherit" component={Link} to="/user">User</Button>
            </div> : ""
          }
          {
            isAdmin(auth) ?
              <div>
                <Button color="inherit" component={Link} to="/admin">Admin</Button>
              </div> : ""
          }
          <div className={classes.grow}></div>
          {
            !auth ? (<div><Button color="inherit" component={Link} to="/login">Login</Button></div>)
                : (<div>{auth.name} <Button color="inherit" onClick={logoutHandler}>Logout</Button></div>)
          }
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
