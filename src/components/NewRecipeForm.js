import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class NewRecipeForm extends Component {
  state = { name: '', title: '', submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, title } = this.state

    //insert POST here

    // this.setState({ submittedName: name, submittedEmail: title })
  }

  render() {
    const { name, title, submittedName, submittedEmail } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
            <Form.Input
              placeholder='Email'
              name='title'
              value={title}
              onChange={this.handleChange}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, title }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
      </div>
    )
  }
}


export default NewRecipeForm;
