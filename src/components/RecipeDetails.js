import React from 'react';

const RecipeDetails = (props) => {

  let recipe = props.recipe

  let collectIngredients = () => {
    if (typeof(recipe.ingredients) === 'object') {
      return <ul>{recipe.ingredients.map(ing => <li>{ing["text"]}</li>)}</ul>
    }
    else if (typeof(recipe.ingredients) === 'string') {
      let ings = recipe.ingredients.split(', ')
      return <ul>{ings.map(ing => <li>{ing}</li>)}</ul>
    } else {
      return null
    }
  }

  let ingredients = (recipe) ? collectIngredients() : null

  return (
    <div>
      <img src={recipe.image}/>
      <h1>{recipe.label}</h1>
      <h4>See full recipe from {recipe.source} <a href={recipe.url} target="_blank">here.</a></h4>
      {ingredients}
      <button onClick={props.clearRecipe}>Back to List</button>
    </div>
  )
}

export default RecipeDetails;
