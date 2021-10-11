import React, {useEffect, useState} from 'react';
import useData from "../hooks/useData";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../actions/data.action";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function Demo() {
  const dispatch = useDispatch();
  const data = useSelector(({data}) => data);
  const getContent = type => dispatch(getData(type));
  return (
    <div>
      <h2>Demo - API Test</h2>
      <p>Result: {data}</p>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          <Button variant="contained" color="default" onClick={() => getContent('public')}>Get Public Content</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => getContent('user')}>Get User Content</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={() => getContent('admin')}>Get Admin Content</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Demo;
