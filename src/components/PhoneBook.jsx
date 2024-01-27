const PhoneBook = ({ contact }) => {
    return (
      <li>{contact.name} - {contact.phone}</li>
    );
  }

export default PhoneBook;