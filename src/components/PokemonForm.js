import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newPoke = {
      name: this.state.name, 
      stats: [{value: this.state.hp, name: 'hp'}],
      sprites: {front: this.state.frontUrl, back: this.state.backUrl}
    }

    fetch(`http://localhost:3000/pokemon`,{
      method: 'POST',
      body: JSON.stringify(newPoke),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(json => {
      this.props.doFetch()
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange = {this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange = {this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange = {this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange = {this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
