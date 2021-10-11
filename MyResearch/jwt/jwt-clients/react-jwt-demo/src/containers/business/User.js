import React from 'react';
import useData from "../../hooks/useData";

function User() {
  const data = useData('user');
  return (
    <div>
      <h2>User</h2>
      <p>Data: {data}</p>
    </div>
  );
}

export default User;
