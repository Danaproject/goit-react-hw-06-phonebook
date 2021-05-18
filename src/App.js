import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';
import Panel from './components/Panel';

class App extends Component {
  state = {
    // contacts: [
    //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    // ],
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // dynamicSort = (property) => {
  //   let sortOrder = 1;
  //   if(property[0] === "-") {
  //       sortOrder = -1;
  //       property = property.substr(1);
  //   }
  //   return function (a,b) {
  //     let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
  //     return result * sortOrder;
  //   }
  // }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  ifContactExists = name => {
    return this.state.contacts.some(contact => contact.name === name);
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    if (!this.ifContactExists(name)) {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
      // this.state.contacts.sort(this.dynamicSort("name"));
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const totalContactsCount = contacts.length;
    const visibleContacts = this.getFilteredContacts();

    return (
      <Container>
        <Panel>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </Panel>
        <Panel>
          <h1>Contacts</h1>
          <p className="total">Total amount: {totalContactsCount}</p>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            // contacts={this.state.contacts}
            onDeleteContact={this.deleteContact}
          />
        </Panel>
      </Container>
    );
  }
}

export default App;
