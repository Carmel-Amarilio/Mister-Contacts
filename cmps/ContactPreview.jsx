const { useNavigate } = ReactRouterDOM

export function ContactPreview({ contact, onRemove }) {
  const navigate = useNavigate()

  const { id, firstName, lastName, phone, email } = contact
  return (
    <div onClick={() => navigate(`/contacts/${id}`)}>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{email}</p>
      <p>{phone}</p>
      <button onClick={(ev) =>{ev.stopPropagation(); onRemove(id)}}>X</button>
    </div>
  );
}
