import React, { Fragment } from 'react';
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Adapter from './Adapter';
import LogoutButton from './LogoutButton';

class NavBar extends React.Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({
    activeItem: name
  })

  render() {
    return (
      <header className="nav">
        <NavLink activeClassName="selected" exact to="/">Home</NavLink>
          { Adapter.isLoggedIn() ?
            <Fragment>
              <LogoutButton />
              <NavLink activeClassName="selected" exact to="/my_recipes">My Recipes</NavLink>
              <NavLink activeClassName="selected" exact to="/new_recipe">Add A Recipe</NavLink>
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

}

export default NavBar;
