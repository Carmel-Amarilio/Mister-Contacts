import { contactService } from "../services/contact.service";

export function Contacts() {
  const [contacts, setContacts] = useState();
  const [isAdd, setisAdd] = useState(null);
  const [newContact, setNewContact] = useState(
    contactService.getEmptyContact()
  );

  useEffect(() => {
    loadContacts();
  }, []);

  function loadContacts() {
    setContacts(contactService.query());
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
  function onAddContact(contact) {
    const newContact = contactService.createContact(contact);
    contactService.save(newContact, false);
  }

  return (
    <div>
      <h1>my contacts</h1>
      <div>
        isAdd?
        <div>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              onAddContact(...contacts, newContact);
              setAddMode(null);
            }}
          >
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={handlechange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={handlechange}
            />
            <input
              type="text"
              name="mail"
              placeholder="Mail"
              onChange={handlechange}
            />
            <input
              type="tel"
              name="firstName"
              placeholder="First name"
              onChange={handlechange}
            />
          </form>
        </div>
        :<button onClick={setisAdd(true)}>Add Contact</button>
      </div>
    </div>
  );
}
