import React from 'react';
import useData from "../../hooks/useData";

function Admin() {
  const data = useData('admin');
  return (
    <div>
      <h2>Admin</h2>
      <p>Data: {data}</p>
    </div>
  );
}

export default Admin;
