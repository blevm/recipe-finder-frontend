import React, { Component, Fragment } from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Adapter from './Adapter';
import LogoutButton from './LogoutButton';

export default class MenuExampleSecondary extends Component {

  render() {

    return (
      <Menu secondary size='big'>
        <Menu.Item
          as={NavLink}
          exact to="/"
          name='home'
        />
      { Adapter.isLoggedIn() ?
        <Fragment>
          <Menu.Item
            as={NavLink}
            exact to="/my_recipes"
            name='myRecipes'
          />
          <Menu.Item
            as={NavLink}
            exact to="/new_recipe"
            name='addARecipe'
          />
        <Menu.Menu position='right'>
          <Menu.Item
            as={LogoutButton}
            name='logout'
          />
        </Menu.Menu>
        </Fragment>
        :
        <Fragment>
        <Menu.Menu position='right'>
          <Menu.Item
            as={NavLink}
            exact to="/register"
            name='register'
            color='blue'
        />
        <Menu.Item
            as={NavLink}
            exact to="/login"
            name='login'
            color='green'
          />
        </Menu.Menu>
      </Fragment>}
      </Menu>
    )
  }
}
