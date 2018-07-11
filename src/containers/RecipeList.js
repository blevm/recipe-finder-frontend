import React from 'react';
import Recipe from '../components/Recipe';
import RecipeDetails from '../components/RecipeDetails';
import { Card } from 'semantic-ui-react'

class RecipeList extends React.Component {
  state = {
    recipes: [],
    selectedRecipe: null
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
      });
    })
    ///////////////// YO WHAT IS THIS /////////////////////////////////////////////
    ////// WHAT DOES HE MEAN TO ABSTRACT LOCAL STORAGE INTO AN ADAPTER ///////////
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

  render() {
    let allRecipes = this.state.recipes.map(recipe => <Recipe recipe={recipe} selectRecipe={() => this.selectRecipe(recipe)} />)
    return (
      <React.Fragment>
        {this.state.selectedRecipe !== null ? <RecipeDetails clearRecipe={this.clearRecipe} recipe={this.state.selectedRecipe} /> :
          <React.Fragment>
            <h2>My Recipes</h2>
            <br></br>
            <Card.Group centered itemsPerRow={3}>
              {allRecipes}
            </Card.Group>
          </React.Fragment>
          }
      </React.Fragment>
    )
  }

}

export default RecipeList;
