
export const SET_CONTACTS = 'SET_CONTACTS'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const SET_FILTER_BY = 'SET_FILTER_BY'

const initialState = {
    contacts: [],
    filterBy: 'all'
}

export function contactReducer(state = initialState, action = {}) {
    let contacts
    switch (action.type) {

        case SET_CONTACTS:
            return { ...state, contacts: [...action.contacts] }
        case ADD_CONTACT:
            return { ...state, contacts: [action.contact, ...state.contacts] }
        case UPDATE_CONTACT:
            return { ...state, contacts: state.contacts.map(contact => contact.id === action.contact._id ? action.contact : contact) }
        case REMOVE_CONTACT:
            contacts = state.contacts.filter(contact => contact.id !== action.contactId)
            return { ...state, contacts }
        case SET_FILTER_BY:
            return { ...state, filterBy: action.val }

        default:
            return state
    }
}