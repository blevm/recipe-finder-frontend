import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';

class NewRecipeForm extends React.component {
  constructor(props) {
    super(props)

    this.state={

    }
  }

  render() {
    return (
      <Form>
    <Form.Group widths='equal'>
      <Form.Field required
        id='form-input-control-recipe-title'
        control={Input}
        label='Recipe Title'
        placeholder='Recipe Title'
      />
    </Form.Group>
    <Form.Field required
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Ingredients'
      placeholder='Ingredients'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
    />
  </Form>
    )
  }
}

export default NewRecipeForm;
