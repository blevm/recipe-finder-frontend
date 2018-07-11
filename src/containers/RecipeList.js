import React from 'react';
import Recipe from '../components/Recipe';
import RecipeDetails from '../components/RecipeDetails';

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
      `http://localhost:4000/users/2/recipes`,
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
        <div>
          <h2>My Recipes</h2>
          {allRecipes}
        </div>
        }
      </React.Fragment>
    )
  }

}

export default RecipeList;
