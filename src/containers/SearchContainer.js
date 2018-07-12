import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';
import { Divider, Grid } from 'semantic-ui-react';
import RecipeDetails from '../components/RecipeDetails';
import Adapter from '../components/Adapter';


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
    Adapter.getRecipes(this.state.term)
      .then( data => this.setState({
        searchedRecipes: data.hits
      }, () => console.log(this.state.searchedRecipes)))
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
       {this.state.selectedRecipe !== null ? <RecipeDetails history={this.props.history} clearRecipe={this.clearRecipe} recipe={this.state.selectedRecipe} /> :
       <React.Fragment>
       <Grid>
         <Grid.Row centered>
           <SearchBar term={this.state.term} handleSubmit={this.handleSubmit} handleSearchChange={this.handleSearchChange}/>
         </Grid.Row>
       </Grid>
         <Divider />
         {this.state.searchedRecipes.length !== 0 ? <SearchResultsList history={this.props.history} recipes={this.state.searchedRecipes} selectRecipe={this.selectRecipe} /> : <h1>Deliciousness is just a click away...</h1>}
        </React.Fragment>
       }
     </React.Fragment>
    )
  }
}

export default SearchContainer;
