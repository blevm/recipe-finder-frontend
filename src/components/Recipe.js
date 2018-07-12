import React from 'react';
import { Card } from 'semantic-ui-react';

const Recipe = (props) => {

  let iconNumber = Math.floor(Math.random()*5+1)

    return (
      <Card
        onClick = {props.selectRecipe}
        image={(props.recipe.image) ? props.recipe.image : require(`../icon-imgs/icon-${iconNumber}.png`) }
        header={(props.recipe.label) ? props.recipe.label : 'My Recipe'}
        meta={props.recipe.source}
      />
    )
  }

export default Recipe;
