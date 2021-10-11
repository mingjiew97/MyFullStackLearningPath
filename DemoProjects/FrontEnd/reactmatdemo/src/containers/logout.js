import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logout } from "../actions/actions-auth";
import { Button, Grid } from 'material-ui';

class Logout extends Component {

  logout = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  render() {
    return (
        <div style={{margin: "10px"}}>
          <Grid container spacing={0} direction="column" >
            <h2>Logout Page</h2>
            <Grid>
              <Button raised color="accent" onClick={this.logout}>Click to Logout</Button>
            </Grid>
          </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { loggedIn: state.loggedIn };
}

export default connect(mapStateToProps, {logout})(Logout);