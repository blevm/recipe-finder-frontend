import React from 'react';
import { Card } from 'semantic-ui-react';

const SearchResult = (props) => {
  let descriptionList = (props.recipe) ?  <ul>{props.recipe.ingredients.map(ing => <li>{ing["text"]}</li>)}</ul> : null

console.log(`description`, descriptionList);
  return (
    <Card
      href={props.recipe.url}
      target="_blank"
      image={props.recipe.image}
      header={props.recipe.label}
      meta={props.recipe.source}
    />
  )
}

export default SearchResult;
