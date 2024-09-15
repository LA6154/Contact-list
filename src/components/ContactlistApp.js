// src/components/ContactListApp.js
import React, { useState } from "react";
import './ContactlistApp.css'; // Import the CSS file for styling

const ContactlistApp = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const addContact = () => {
    if (newContact.name && newContact.email) {
      setContacts([...contacts, newContact]);
      setNewContact({ name: "", email: "" });
    }
  };

  const deleteContact = (index) => {
    const filteredContacts = contacts.filter((_, i) => i !== index);
    setContacts(filteredContacts);
  };

  return (
    <div className="contact-list-app">
      <h1>Contact List</h1>

      <div className="contact-form">
        <input
          type="text"
          name="name"
          value={newContact.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={newContact.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <button onClick={addContact}>Add Contact</button>
      </div>

      <ul className="contact-list">
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <li key={index} className="contact-item">
              <div className="contact-info">
                <strong>{contact.name}</strong> <span>{contact.email}</span>
              </div>
              <button onClick={() => deleteContact(index)} className="delete-btn">
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No contacts available. Add some!</p>
        )}
      </ul>
    </div>
  );
};

export default ContactlistApp;
