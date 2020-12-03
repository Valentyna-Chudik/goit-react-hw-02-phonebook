import { Component } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={uuidv4()}>
          Name
          <input
            id={uuidv4()}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <label htmlFor={uuidv4()}>
          Number
          <input
            id={uuidv4()}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
