import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {checkLogin} from "../actions/auth.action";
import {useEffect} from "react";

export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, []);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-product">Add Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}