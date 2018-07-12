import React, { Component, Fragment } from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Adapter from './Adapter';
import LogoutButton from './LogoutButton';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary size='big'>
        <Menu.Item
          as={NavLink}
          exact to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
      { Adapter.isLoggedIn() ?
        <Fragment>
          <Menu.Item
            as={NavLink}
            exact to="/my_recipes"
            name='myRecipes'
            active={activeItem === 'myRecipes'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            exact to="/new_recipe"
            name='addARecipe'
            active={activeItem === 'addARecipe'}
            onClick={this.handleItemClick}
          />
        <Menu.Menu position='right'>
          <Menu.Item
            as={LogoutButton}
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
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
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
        />
        <Menu.Item
            as={NavLink}
            exact to="/login"
            name='login'
            color='green'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Fragment>}
      </Menu>
    )
  }
}
