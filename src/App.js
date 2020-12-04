import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';

const initialState = [{ id: '', name: '', number: '' }];

export default class App extends Component {
  state = {
    contacts: initialState,
  };

  addContact = (name, number) => {
    console.log(name, number);

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <Container>
          <Section title="Phonebook">
            <Form onSubmit={this.addContact} />
          </Section>
          <Section title="Contacts">
            <ContactsList
              contacts={this.state.contacts}
              onDeleteContact={this.deleteContact}
            />
          </Section>
        </Container>
      </div>
    );
  }
}
