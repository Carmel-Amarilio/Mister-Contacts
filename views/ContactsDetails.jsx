const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM
const { Link} = ReactRouterDOM;

import { contactService } from '../services/contact.service.js'

export function ContactsDetails() {
    const params = useParams()
    const navigate = useNavigate()
    const [currContact, setCurrContact] = useState(null)

    useEffect(() => {
        const { contactId } = params
        contactService.get(contactId)
            .then(contact => {
                if (!contact) return navigate('/contacts')
                setCurrContact(contact)
            })
            .catch(err => {
                console.log('Had issues loading contacts');
            })
    }, [])

    console.log(currContact);
    if (!currContact) return <div>loading...</div>
    const { id, firstName, lastName, phone, email } = currContact
    return (
        <section className="contacts-details">
            <button onClick={() => navigate('/contacts')}>back</button>
            <img src="assets\img\user1.jpeg" />
            <h1>Name: {firstName} {lastName}</h1>
            <h3>Phone: {phone}</h3>
            <h3>Email: {email}</h3>
            <Link to={`/contacts/edit/${id}`} >Edit</Link>

        </section>
    )
}