import React from 'react';
import Recipe from './Recipe';
import { Card } from 'semantic-ui-react';

class SearchResultsList extends React.Component {

  render() {
    let allRecipes = this.props.recipes.map(res => <Recipe selectRecipe={() => this.props.selectRecipe(res.recipe)} recipe={res.recipe} />)
    return (
    <Card.Group centered itemsPerRow={4}>
      {allRecipes}
    </Card.Group>
    )
  }
}

export default SearchResultsList;
