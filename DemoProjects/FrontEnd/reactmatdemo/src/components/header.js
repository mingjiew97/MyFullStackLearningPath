import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography, IconButton,
    Drawer, List, ListItem, ListItemIcon, ListItemText, ButtonBase } from 'material-ui';
import { Menu, Home, Forward, Reply, AddCircle } from 'material-ui-icons';

class Header extends Component {

    state = {
      nav: false
    };

    toggleNav = (open) => () => {
        this.setState({
            nav: open,
        });
    };

  render() {
    return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="contrast" aria-label="Menu" onClick={this.toggleNav(true)}>
                <Menu />
              </IconButton>
              <Typography type="title" color="inherit" style={{flex: 1}}>
                React Demo
              </Typography>
              {/*<Button color="contrast">Home</Button>*/}
            </Toolbar>
          </AppBar>
          <Drawer open={this.state.nav} onClose={this.toggleNav(false)}>
            <List style={{width: "200px"}}>
              <ListItem button component={Link} to='/login' onClick={this.toggleNav(false)}>
                <ListItemIcon>
                  <Forward />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button component={Link} to='/' onClick={this.toggleNav(false)}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to='/addproduct' onClick={this.toggleNav(false)}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary="Add Product" />
              </ListItem>
              <ListItem button component={Link} to='/logout' onClick={this.toggleNav(false)}>
                <ListItemIcon>
                  <Reply />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>
        </div>
    );
  }
}

export default Header;