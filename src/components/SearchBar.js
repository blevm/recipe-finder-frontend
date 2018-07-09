import React from 'react';
import { Input } from 'semantic-ui-react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Input action='Search' placeholder='Search Recipes (Powered by Edamam)' style={{width: 500}} value={this.props.term} onChange={this.props.handleSearchChange} />
    )
  }
}

export default SearchBar;
