const {  useNavigate } = ReactRouterDOM

export function ContactList({ contacts, onRemove }) {
    const navigate = useNavigate()

    return (
        <section className="contact-list">
            <ul>
                {contacts.map(contact => {
                    const { id, firstName, lastName, phone, email } = contact
                    return < li key={id}
                     className={`flex space-around align-center`}
                     onClick={() => navigate(`/contacts/${id}`)}>
                        <p>{firstName} {lastName}</p>
                        <p>{phone}</p>
                        <p>{email}</p>
                        <button onClick={(ev) =>{ev.stopPropagation(); onRemove(id)}}>X</button>
                    </li>
                })}
            </ul>
        </section >
    )
}
