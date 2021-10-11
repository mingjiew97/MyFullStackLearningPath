import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from "../actions/actions-auth";
import { Button, Grid } from 'material-ui';

class Login extends Component {

  login = () => {
    this.props.login();
    this.props.history.push('/');
  }

  render() {
    return (
        <div style={{margin: "10px"}}>
          <Grid container spacing={0} direction="column" >
            <h2>Login Page</h2>
            <Grid>
              <Button raised color="primary" onClick={this.login}>Click to Login</Button>
            </Grid>
          </Grid>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { loggedIn: state.loggedIn };
}

export default connect(mapStateToProps, {login})(Login);