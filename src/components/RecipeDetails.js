import React from 'react';
import { Button } from 'semantic-ui-react';

const RecipeDetails = (props) => {

  let recipe = props.recipe

  let collectIngredients = () => {
    if (typeof(recipe.ingredients) === 'object') {
      return <ul className="ingredients-list">{recipe.ingredients.map(ing => <li>{ing["text"]}</li>)}</ul>
    }
    else if (typeof(recipe.ingredients) === 'string') {
      let ings = recipe.ingredients.split(', ')
      return <ul className="ingredients-list">{ings.map(ing => <li>{ing}</li>)}</ul>
    } else {
      return null
    }
  }

  let ingredients = (recipe) ? collectIngredients() : null

  const postRecipe = (recipe) => {
    let recipeString = recipe.ingredients.map(ing => ing["text"]).join(', ')

    let body = {
      recipe: {
        label: recipe.label,
        source: recipe.source,
        url: recipe.url,
        image: recipe.image,
        ingredients: recipeString
      }
    }

    let config = {
      method: 'POST',
      headers: {"Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify(body)
    }

    fetch('http://localhost:4000/save-recipe', config)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <img src={recipe.image}/>
      <h1>{recipe.label}</h1>
      <h4>See full recipe from {recipe.source} <a href={recipe.url} target="_blank">here.</a></h4>
      {ingredients}
      <br/>
      <Button color="yellow" onClick={props.clearRecipe}>Back to List</Button>  {props.recipeList !== "true" ? <Button color="green" onClick={() => postRecipe(recipe)}>Add to My Recipe List</Button> : null}
    </div>
  )
}

export default RecipeDetails;
