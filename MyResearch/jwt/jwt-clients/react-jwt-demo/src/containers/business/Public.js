import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../actions/data.action";
import useData from "../../hooks/useData";

function Public() {
  const data = useData('public');
  return (
    <div>
      <h2>Public</h2>
      <p>Data: {data}</p>
    </div>
  );
}

export default Public;
