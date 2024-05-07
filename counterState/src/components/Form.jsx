import React, { useState } from "react";

const Form = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: name,
      email: email,
    };

    setContacts([...contacts, contact]);

    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Add Contact</h3>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <div>
        <h3>My Contact Book</h3>
        <ul>
          {contacts.map((item, index) => {
            return (
              <li key={index}>
                Name: {item.name} <br />
                Email: {item.email}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Form;

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
