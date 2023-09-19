import { contactService } from "../services/contact.service.js";
import { loadContacts } from "../store/actions/contact.actions.js";
import { removeContact } from "../store/actions/contact.actions.js";
import { updateContact } from "../store/actions/contact.actions.js";
import { addContact } from "../store/actions/contact.actions.js";
import {ContactList} from "../cmps/ContactList.jsx"
const { useSelector, useDispatch } = ReactRedux;
const { useState, useEffect } = React;
export function Contacts() {
  const [isAdd, setisAdd] = useState(null);
  const [newContact, setNewContact] = useState(
    contactService.getEmptyContact()
  );
  const contacts = useSelector((storeState) => storeState.contactModule.contacts);

  useEffect(() => {
    loadContacts().catch((err) => console.log(err));
  }, []);

  function onRemoveContact(contactId) {
    removeContact(contactId).catch((err) => console.log(err));
  }
  function onEditContact(contactId) {
    updateContact(contactId).catch((err) => console.log(err));
  }
  function onAddContact(contact) {
    addContact(contact).catch((err) => console.log(err));
  }
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

  console.log(contacts);
  return (
    <section >
      <h1>my contacts</h1>
      <div>
        {!isAdd ? (
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
                setisAdd(null);
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
        ) : (
          <div>
            <button onClick={setisAdd(true)}>Add Contact</button>
          </div>
        )}
      </div>
      <ContactList contacts={contacts} />
    </section>
  );
}
