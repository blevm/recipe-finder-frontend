import React from 'react';
import exampleResults from '../exampleresults.json';

const RecipeDetails = (props) => {
  let recipe = props.recipe
  console.log('recipe inside recipe details', recipe)
  let ingredients = (recipe) ?  <ul style={{listStyleType: "none"}}>{recipe.ingredients.map(ing => <li>{ing["text"]}</li>)}</ul> : null
  return (
    <div>
      <img src={recipe.image}/>
      <h1>{recipe.label}</h1>
      {ingredients}
      <p>See full recipe from {recipe.source} <a href={recipe.url} target="_blank">here.</a></p>
      <button onClick={props.clearRecipe}>Back to List</button>
    </div>

  )
}

export default RecipeDetails;
