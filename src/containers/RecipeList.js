import React from 'react';
import Recipe from '../components/Recipe';
import RecipeDetails from '../components/RecipeDetails';
import { Card, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
// import './stylesheets/index.css';
// import 'semantic-ui-css/semantic.min.css'

class RecipeList extends React.Component {
  state = {
    recipes: [],
    filteredRecipes: [],
    selectedRecipe: null,
    recipeList: "true",
    searchTerm: "",
    searchTermIng: ""
  }

  componentDidMount() {
    this.getMyRecipes();
  }

  getMyRecipes = () => {
    fetch(
      `http://localhost:4000/my-recipes`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('token')
        }
      }
    )
    .then(res => {
      console.log(res);
      return res.json()
    })
    .then(json => {
      this.setState({
        recipes: json,
        filteredRecipes: json
      });
    })
    .catch(err => {
      console.log('catch');
      this.setState({
        recipes: [],
      });
    })
  }

  clearRecipe = () => {
    console.log('inside clear recipe')
    this.setState({
      selectedRecipe: null
    })
  }

  selectRecipe = (recipe) => {
    this.setState({
      selectedRecipe: recipe
    }, () => console.log(this.state.selectedRecipe))
  }

  clearRecipe = () => {
    this.setState({
      selectedRecipe: null
    })
  }

  handleChange = (event) => {

    const recipes = this.state.filteredRecipes.filter( recipe => {
      console.log("recipe", recipe)
      return recipe.label.toLowerCase().includes(event.target.value.toLowerCase())
    })

    this.setState({
      searchTerm: event.target.value,
      recipes
    })
}

    handleChangeIng = (event) => {

      const recipes = this.state.filteredRecipes.filter( recipe => {
        return recipe.ingredients.toLowerCase().includes(event.target.value.toLowerCase())
      })
      this.setState({
        searchTermIng: event.target.value,
        recipes
      })
    }


  render() {
    let allRecipes = this.state.recipes.map(recipe => <Recipe recipe={recipe} selectRecipe={() => this.selectRecipe(recipe)} />)
    console.log(this.state.recipes.length === 0)
    return (
      <React.Fragment>
        {this.state.selectedRecipe !== null ? <RecipeDetails history={this.props.history} recipeList={this.state.recipeList} clearRecipe={this.clearRecipe} recipe={this.state.selectedRecipe} /> :
        (this.state.recipes.length === 0) ? <h3>You don't have any recipes yet! Perform a <NavLink to='/'>search</NavLink> or <NavLink to="/new_recipe">add a recipe</NavLink> to get started.</h3> :
      <div>
            <div>
              <Input
                 style={{padding:'10px'}}
                 size='massive'
                 onChange={this.handleChange}
                 placeholder='Search By Name...'
                 value={this.state.searchTerm}
                 type="text"
              />
              <Input
                style={{padding:'10px'}}
                size='massive'
                onChange={this.handleChangeIng}
                placeholder='Search By Ingredients...'
                value={this.state.searchTermIng}
                type="text"
              />
            </div>

            <div>
              <h2>My Recipes</h2>
              <Card.Group centered itemsPerRow={4}>
              {allRecipes}
              </Card.Group>
            </div>
          </div>
        }
      </React.Fragment>
    )
  }

}

export default RecipeList;
