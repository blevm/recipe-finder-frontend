import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';
import { Divider } from 'semantic-ui-react'
import RecipeDetails from '../components/RecipeDetails'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      searchedRecipes: [],
      selectedRecipe: null
    }
  }

  handleSubmit = () => {
    console.log('inside handle submit', this.state.term)
  }

  handleSearchChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  selectRecipe = (recipe) => {
    this.setState({
      selectedRecipe: recipe
    })
  }

  clearRecipe = () => {
    console.log('inside clear recipe')
    this.setState({
      selectedRecipe: null
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.selectedRecipe !== null ? <RecipeDetails clearRecipe={this.clearRecipe} recipe={this.state.selectedRecipe} /> :
        <div>
          <SearchBar term={this.state.term} handleSubmit={this.handleSubmit} handleSearchChange={this.handleSearchChange}/>
          <Divider />
          <SearchResultsList selectRecipe={this.selectRecipe} />
        </div>
        }
      </React.Fragment>
    )
  }
}

export default SearchContainer;
