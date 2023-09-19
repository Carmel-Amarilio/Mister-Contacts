import { addContact } from "../store/actions/contact.actions.js";
export function ContactAdd({ onAddContact }) {
  const [newContact, setNewContact] = useState(
    contactService.getEmptyContact()
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
  return (
    <div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          onAddContact(
            contactService.createContact(
              newContact.firstName,
              newContact.lastName,
              newContact.mail,
              newContact.phone
            )
          );
        }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="mail"
          placeholder="Mail"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
