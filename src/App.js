import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <Container>
          <Section title="Phonebook">
            <Form onSubmit={this.addContact} />
          </Section>
          <Section title="Contacts">
            <ContactsList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
            <Filter value={filter} onChange={this.changeFilter} />
          </Section>
        </Container>
      </div>
    );
  }
}
