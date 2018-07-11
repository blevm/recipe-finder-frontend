import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Adapter from './Adapter';

const NavBar = (props) => {
  return (
    <header className="nav">
      <NavLink activeClassName="selected" exact to="/">Home</NavLink>
        { Adapter.isLoggedIn() ?
          <Fragment>
            <button onClick={() => {
                Adapter.logout();
                props.history.push("/login");
              }}>Logout</button>
            <NavLink activeClassName="selected" exact to="/my_recipes">My Recipes</NavLink>
          </Fragment>
          :
            <Fragment>
              <NavLink activeClassName="selected" exact to="/register">Registration</NavLink>
              <NavLink activeClassName="selected" exact to="/login">Login</NavLink>
            </Fragment>
        }
    </header>
  )
}

export default NavBar;
