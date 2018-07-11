import React from 'react';
import { Card } from 'semantic-ui-react';

const Recipe = (props) => {

    return (
      <Card
        onClick = {props.selectRecipe}
        image={props.recipe.image}
        header={props.recipe.label}
        meta={props.recipe.source}
      />
    )
  }

export default Recipe;
