const { useNavigate } = ReactRouterDOM
import { ContactPreview } from "./ContactPreview.jsx"

export function ContactList({ contacts, onRemove }) {
    const navigate = useNavigate()

    return (
        <section className="contact-list">
            <ul>
                {contacts.map(contact => {
                    const { id } = contact
                    return < li key={id} className={`flex space-around align-center`}>
                        <ContactPreview contact={contact} onRemove={onRemove} />
                    </li>
                })}
            </ul>
        </section >
    )
}
