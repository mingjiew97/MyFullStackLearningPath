import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useForm from 'react-hook-form';
import Button from "@material-ui/core/Button";
import {login} from "../actions/auth.action";
import {useDispatch} from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px 0px"
  }
}));

function Login() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(login(data));
  };
  return (
    <main className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={10} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Login
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <TextField label="Username" name="username" inputRef={register} fullWidth />
                  </Grid>
                  <Grid item>
                    <TextField type="password" label="Password" name="password" inputRef={register} fullWidth />
                  </Grid>
                  <Grid item container direction="row">
                    <Button variant="contained" color="primary" type="submit">Login</Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}

export default Login;
