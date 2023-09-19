import { contactService } from "../services/contact.service.js";
import { loadContacts } from "../store/actions/contact.actions.js";
const { useSelector, useDispatch } = ReactRedux;
const { useState, useEffect } = React;
export function Contacts() {
  const [isAdd, setisAdd] = useState(null);
  const [newContact, setNewContact] = useState(
    contactService.getEmptyContact()
  );
  const selector = useSelector(
    (storeState) => storeState.contactModule.contacts
  );

  useEffect(() => {
    loadContacts().catch((err) => console.log(err));
    console.log(selector);
  }, []);

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
  function onAddContact(contact) {
    const newContact = contactService.createContact(contact);
    contactService.save(newContact, false);
  }

  return (
    <div>
      <h1>my contacts</h1>
      <div>
        {isAdd ? (
          <div>
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                onAddContact(newContact);
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
          <button onClick={setisAdd(true)}>Add Contact</button>
        )}
      </div>
    </div>
  );
}
