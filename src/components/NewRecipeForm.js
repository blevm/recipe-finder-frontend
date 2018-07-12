import React, { Component } from 'react'
import { Form, Grid } from 'semantic-ui-react'

class NewRecipeForm extends Component {
  state = {
    label: '',
    source: '',
    url: '',
    image: '',
    ingredients: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { label, source, url, image, ingredients } = this.state

    let body = {
      recipe: {
        label: this.state.label,
        source: this.state.source,
        url: this.state.url,
        image: this.state.image,
        ingredients: this.state.ingredients
      }
    }

    let config = {
      method: 'POST',
      headers: {"Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify(body)
    }

    fetch('http://localhost:4000/save-recipe', config)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      this.props.history.push("/my_recipes");
      }
    )
  }

  render() {
    const { label, source, url, image, ingredients } = this.state

    return (
      <React.Fragment>
          <Grid>
            <Grid.Row centered>
            <Form onSubmit={this.handleSubmit} style={{width: '60%', align: 'center'}}>
                <Form.Input placeholder='Recipe Title' name='label' value={label} onChange={this.handleChange} />
                <Form.Input
                  placeholder='Recipe Source (if not your own!)'
                  name='source'
                  value={source}
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder='Recipe URL (if from an outside source)'
                  name='url'
                  value={url}
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder='Recipe Image URL'
                  name='image'
                  value={image}
                  onChange={this.handleChange}
                />
                <Form.TextArea
                    placeholder='Enter comma-separated list of ingredients'
                    name='ingredients'
                    value={ingredients}
                    onChange={this.handleChange}
                  />
              <Form.Button content='Submit' />
            </Form>
        </Grid.Row>
      </Grid>
    </React.Fragment>
    )
  }
}


export default NewRecipeForm;
