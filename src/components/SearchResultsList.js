import React from 'react';
import exampleResults from '../exampleresults.json';
import SearchResult from './SearchResult';
import { Card } from 'semantic-ui-react';

class SearchResultsList extends React.Component {

  render() {
    console.log(exampleResults.hits)
    let allRecipes = exampleResults.hits.map(res => <SearchResult selectRecipe={() => this.props.selectRecipe(res.recipe)} recipe={res.recipe} />)
    return (
    <Card.Group centered itemsPerRow={4}>
      {allRecipes}
    </Card.Group>
    )
  }
}

export default SearchResultsList;
