const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React


import { ContactAdd } from "../cmps/CotactAdd.jsx";
import { contactService } from '../services/contact.service.js'

export function ContactEdit() {
    const navigate = useNavigate()
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


    function onEdit(contact) {
        contact.id = currContact.id
        contactService.save(contact, true).then(() => navigate(-1))
    }

    if (!currContact) return <div>loading...</div>
    console.log(currContact);
    return (
        <section>
            <ContactAdd onAddContact={onEdit} contact={currContact} />
        </section>
    )
}