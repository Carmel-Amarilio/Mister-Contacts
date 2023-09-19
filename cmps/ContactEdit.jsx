const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { contactService } from '../services/contact.service.js'

export function ContactEdit() {
    const params = useParams()
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

    if(!currContact) return <div>loading...</div>
    console.log(currContact);
    const { id, firstName, lastName, phone, email } = currContact
    return (
        <section>
        </section>
    )
}