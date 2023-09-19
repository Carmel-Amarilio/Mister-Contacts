import { contactService } from '../../services/contact.service.js'
import { SET_CONTACTS, UPDATE_CONTACTS, ADD_CONTACTS, REMOVE_CONTACTS } from '../reducers/contact.reducer.js'
import { store } from '../store.js'

export function loadContacts() {
    const { filterBy } = store.getState().contactModule

    return contactService.query(filterBy)
        .then(contacts => {
            store.dispatch({
                type: SET_CONTACTS,
                contacts
            })
        })
        .catch(err => {
            console.error('Cannot load contacts:', err)
        })
}


export function removeContact(contactId) {
    return contactService.removeContact(contactId)
        .then(() => {
            store.dispatch({
                type: REMOVE_CONTACTS,
                contactId
            })
        })
        .catch(err => {
            console.error('Cannot remove contact:', err)
            throw err
        })
}

export function updateContact(contact) {
    return contactService.save(contact)
        .then((savedContact) => {
            store.dispatch({
                type: UPDATE_CONTACTS,
                contact: savedContact
            })
        })
        .catch(err => {
            console.error('Cannot save contact:', err)
        })
}


export function addContact(contactToAdd) {
    return contactService.save(contactToAdd)
        .then(savedContact => {
            store.dispatch({
                type: ADD_CONTACTS,
                contact: savedContact
            })
        })
        .catch(err => {
            console.error('Cannot save contact:', err)
        })
}