import React from 'react';
import Recipe from '../components/Recipe';
import RecipeDetails from '../components/RecipeDetails';
import { Card } from 'semantic-ui-react';

class RecipeList extends React.Component {
  state = {
    recipes: [],
    selectedRecipe: null,
    recipeList: "true"
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

  clearRecipe = () => {
    this.setState({
      selectedRecipe: null
    })
  }

  render() {
    let allRecipes = this.state.recipes.map(recipe => <Recipe recipe={recipe} selectRecipe={() => this.selectRecipe(recipe)} />)
    return (
      <React.Fragment>
        {this.state.selectedRecipe !== null ? <RecipeDetails history={this.props.history} recipeList={this.state.recipeList} clearRecipe={this.clearRecipe} recipe={this.state.selectedRecipe} /> :
        <div>
          <h2>My Recipes</h2>
          <Card.Group centered itemsPerRow={4}>
          {allRecipes}
          </Card.Group>
        </div>
        }
      </React.Fragment>
    )
  }

}

export default RecipeList;
