import { contactService } from "../services/contact.service.js";
const { useState } = React;

export function ContactAdd({ onAddContact, contact }) {
  const [newContact, setNewContact] = useState(
    contact || contactService.getEmptyContact()
  );
  function handleChange({ target }) {
    const field = target.name;
    let value = target.value;

    switch (target.type) {
      case "number":
      case "range":
        value = +value || "";
        break;

      case "checkbox":
        value = target.checked;
        break;

      default:
        break;
    }

    setNewContact((prevNewContact) => ({
      ...prevNewContact,
      [field]: value,
    }));
  }

  const { firstName, lastName, email, phone } = newContact;
  return (
    <div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          onAddContact(
            contactService.createContact(firstName, lastName, email, phone)
          );
        }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Mail"
          value={email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={handleChange}
        />
        <button className="wordy-btn">{contact ? "save" : "Add"}</button>
      </form>
    </div>
  );
}
