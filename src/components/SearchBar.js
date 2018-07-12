import React from 'react';
import { Form, Input, Button, Grid } from 'semantic-ui-react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <Form onSubmit={this.props.handleSubmit}>
          <Grid>
            <Grid.Row centered>
               <Form.Group>
                 <Form.Input className="search-form" placeholder='Search Recipes (Powered by Edamam)' value={this.props.term} onChange={this.props.handleSearchChange} />
                 <Form.Button content='Submit' />
               </Form.Group>
            </Grid.Row>
          </Grid>
        </Form>
    )
  }
}

export default SearchBar;
