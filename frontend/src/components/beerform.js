import React, { Component } from 'react';

class BeerForm extends Component {
  state = {
    name: "",
    description: ""
  }

  handleSubmit = (event) => {
    const beer = {
      name: this.state.name,
      description: this.state.description
    }
    event.target.reset();
    event.preventDefault();
    this.props.addBeer(beer);
    this.setState({
      name: "",
      description: ""
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <p>
        <label htmlFor="beer-name"> Name: </label>
        <input type="text" id="beer-name" value={ this.state.name } onChange={ e => this.setState({ name: e.target.value }) }/>
        </p>

        <p>
        <label htmlFor="beer-description"> Description: </label>
        <textarea id="beer-description" value={ this.state.description }
          onChange={ e => this.setState({ description: e.target.value }) }> </textarea>
        </p>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default BeerForm;