import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";

const CONTACT_KEY = "contactDB";
_createContacts();

export const contactService = {
  query,
  get,
  remove,
  save,
  getEmptyContact,
  createContact,
};

function query() {
  return storageService.query(CONTACT_KEY);
}

function get(contactId) {
  return storageService.get(CONTACT_KEY, contactId);
}

function remove(contactId) {
  return storageService.remove(CONTACT_KEY, contactId);
}

function save(contact, isEdit) {
  return isEdit
    ? storageService.put(CONTACT_KEY, contact.id)
    : storageService.post(CONTACT_KEY, contact);
}

function getEmptyContact() {
  return { firstName: "", lastName: "", email: "", phone: 0 };
}

function _createContacts() {
  let contacts = utilService.loadFromStorage(CONTACT_KEY);
  if (!contacts || !contacts.length) {
    contacts = [];
    contacts.push(_createContact("avi", "avi", "jgjgjg@hghghgh", "0505050505"));
    contacts.push(_createContact("avi", "avi", "jgjgjg@hghghgh", "0505050505"));
    contacts.push(_createContact("avi", "avi", "jgjgjg@hghghgh", "0505050505"));
    contacts.push(_createContact("moshe", "moshe", "jgjgfffjg@hghghgh", "05050505")
    );

    utilService.saveToStorage(CONTACT_KEY, contacts);
  }
}

function createContact(firstName, lastName, email, phone) {
  return {
    id: utilService.makeId(),
    firstName,
    lastName,
    email,
    phone,
  };
}
