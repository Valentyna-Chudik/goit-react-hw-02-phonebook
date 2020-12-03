import { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';

export default class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  // handleChange = e => {
  //   this.setState({ name: e.currentTarget.value });
  // };

  // addToDo = text => {
  //   console.log(text);

  //   const contact = {
  //     id: uuidv4(),
  //     name:
  //   };
  // };

  render() {
    return (
      <div>
        <div>
          <h1>PHONEBOOK</h1>
          <Form onSubmit={this.formSubmitHandler} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li name={this.state.name} id=""></li>
          </ul>
        </div>
      </div>
    );
  }
}
