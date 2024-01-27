import { useState } from 'react';
import PhoneBook from './components/PhoneBook';
import Add from './components/add';
import Filter from './components/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { name: "Deepak chand", id: 1, phone: "9131043168" },
    { name: "Dilip Kumar", id: 2, phone: "8919562348" },
    { name: "Sriniva", id: 3, phone: "9989901348" }
  ]);
  const [filteredContacts,SetFilteredContacts] = useState(contacts)
  const [newname, setNewName] = useState('');
  const [newphone, setNewPhone] = useState('');
  const [searchField, setsearchField] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
    console.log(event.target.value);
  }

  const addContact = (event) => {
    event.preventDefault();
    const newContact = {
      name: newname,
      phone: newphone,
      id: contacts.length + 1 
    }
    setContacts(contacts.concat(newContact));
    setNewName('');
    setNewPhone('');
    console.log("button clicked");
  }

  const handleSearch = (event) => {
    setsearchField(event.target.value);
    console.log(event.target.value);
  }

  const searchContact = (event) => {
    event.preventDefault();
    const SearchResults = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchField.toLowerCase()) ||
      contact.phone.includes(searchField)
    );
    console.log("Button clicked search");
    SetFilteredContacts(SearchResults)
  }

  contacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1>Phone Book</h1>

      <h2>Filter</h2>
      <br></br>
      <form onSubmit={searchContact}>
        <Filter searchField={searchField} handleSearch={handleSearch} />  <br></br>
        <br></br>
        <button type="submit" >Find</button>
      </form>
      <br></br>
      <h3>add</h3>
      <form onSubmit={addContact}>
        <Add
          newname={newname}
          newphone={newphone}
          handleNameChange={handleNameChange}
          handlePhoneChange={handlePhoneChange}
        />
        <br></br>
        <button type='submit'>ADD</button>
      </form>

      <h1> numbers</h1>
      <ul>
        {filteredContacts.map(contact => (
          <PhoneBook key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default App;
