import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';
import { Divider } from 'semantic-ui-react'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      searchedRecipes: []
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar term={this.state.term} handleSearchChange={this.handleSearchChange}/>
        <Divider />
        <SearchResultsList />
      </React.Fragment>
    )
  }
}

export default SearchContainer;
