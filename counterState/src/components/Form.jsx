import React, { useEffect, useState } from "react";

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

    // update contants with new inserted value
    setContacts([...contacts, contact]);
    localStorage.setItem("contacts", JSON.stringify([...contacts, contact]));
    setName("");
    setEmail("");
  };

  useEffect(() => {
    const items = localStorage.getItem("contacts");
    if (items == null) {
      setContacts([]);
    } else {
      const parsedItems = JSON.parse(items);
      setContacts(parsedItems);
    }
  }, []);

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
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
