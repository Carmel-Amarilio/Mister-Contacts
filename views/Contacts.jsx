import { contactService } from "../services/contact.service.js";
import { loadContacts } from "../store/actions/contact.actions.js";
import { removeContact } from "../store/actions/contact.actions.js";
import { updateContact } from "../store/actions/contact.actions.js";
import { addContact } from "../store/actions/contact.actions.js";
import { ContactList } from "../cmps/ContactList.jsx";
const { useSelector, useDispatch } = ReactRedux;
const { useState, useEffect } = React;
export function Contacts() {
  const [isAdd, setisAdd] = useState(null);
  const [newContact, setNewContact] = useState(
    contactService.getEmptyContact()
  );
  const contacts = useSelector(
    (storeState) => storeState.contactModule.contacts
  );

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
    setisAdd(!isAdd);
  }

  return (
    <section>
      <h1>my contacts</h1>
      <ContactList contacts={contacts} onRemove={onRemoveContact} />
      isAdd?(
      <ContactAdd onAddContact={onAddContact} />
      ):(
      <button onClick={setisAdd(!isAdd)}>Add Contact</button>)
    </section>
  );
}
